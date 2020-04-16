from datetime import datetime, timedelta
from flask_login import UserMixin
from werkzeug.security import generate_password_hash, check_password_hash
from app import app, login, db
from flask import session, url_for
import json
import base64
import os


users = db.Table('users',
    db.Column('user_id', db.Integer, db.ForeignKey('user.id'), primary_key=True),
    db.Column('hospital_id', db.Integer, db.ForeignKey('hospital.id'), primary_key=True)
)


class PaginatedAPIMixin(object):
    @staticmethod
    def to_collection_dict(query, page, per_page, endpoint, **kwargs):
        resources = query.paginate(page, per_page, False)
        data = {
            'items': [item.to_dict() for item in resources.items],
            '_meta': {
                'page': page,
                'per_page': per_page,
                'total_pages': resources.pages,
                'total_items': resources.total
            },
            '_links': {
                'self': url_for(endpoint, page=page, per_page=per_page,
                                **kwargs),
                'next': url_for(endpoint, page=page + 1, per_page=per_page,
                                **kwargs) if resources.has_next else None,
                'prev': url_for(endpoint, page=page - 1, per_page=per_page,
                                **kwargs) if resources.has_prev else None
            }
        }
        return data


class Hospital(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50))
    uti_places = db.Column(db.Integer)
    care_places = db.Column(db.Integer)
    available_uti_places = db.Column(db.Integer)
    available_care_places = db.Column(db.Integer)

    users = db.relationship('User', secondary=users, lazy='dynamic',
        backref=db.backref('hospitals', lazy='dynamic'))

    def set_manager(self, user):
        if user.is_manager_of(self):
            return
        user.hospitals.append(self)
        user.promote_to_manager()
        db.session.commit()
        return

    def get_managers(self):
        return self.users.all()

    @staticmethod
    def get_by_id(id):
        return Hospital.query.filter_by(id=id).first()

    @staticmethod
    def get_by_name(name):
        return Hospital.query.filter_by(name=name).first()

    def __repr__(self):
        return '<Hospital {}>'.format(self.name)


class User(UserMixin, PaginatedAPIMixin, db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(64), index=True, unique=True)
    email = db.Column(db.String(120), index=True, unique=True)
    password_hash = db.Column(db.String(128))
    name = db.Column(db.String(140))
    address = db.Column(db.String(140))
    token = db.Column(db.String(32), index=True, unique=True)
    token_expiration = db.Column(db.DateTime)
    role = db.Column(db.String(32), default="user")
    score = db.Column(db.Float(10, 2))

    def is_manager_of(self, hospital):
        return self.hospitals.filter(
            users.c.hospital_id == hospital.id).count() > 0

    def promote_to_manager(self):
        return self.role=="manager"
    
    def promote_to_nurse(self):
        return self.role=="nurse"

    def promote_to_admin(self):
        return self.role=="admin"

    def promote_to_pacient(self):
        return self.role=="pacient"
    
    def promote_to_user(self):
        return self.role=="user"

    def set_password(self, password):
        self.password_hash = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password_hash, password)

    def get_token(self, expires_in=3600):
        now = datetime.utcnow()
        if self.token and self.token_expiration > now + timedelta(seconds=60):
            return self.token
        self.token = base64.b64encode(os.urandom(24)).decode('utf-8')
        self.token_expiration = now + timedelta(seconds=expires_in)
        db.session.add(self)
        return self.token

    def revoke_token(self):
        self.token_expiration = datetime.utcnow() - timedelta(seconds=1)

    @staticmethod
    def check_token(token):
        user = User.query.filter_by(token=token).first()
        if user is None or user.token_expiration < datetime.utcnow():
            return None
        return user

    @staticmethod
    def get_by_id(id):
        return User.query.filter_by(id=id).first()

    @staticmethod
    def get_by_username(username):
        return User.query.filter_by(username=username).first()

    def to_dict(self, include_email=False):
        data = {
            'id': self.id,
            'username': self.username,
            'name': self.name,
            'address': self.address,
            '_links': {
                'self': url_for('api.get_user', id=self.id)
            }
        }
        if include_email:
            data['email'] = self.email
        return data

    def from_dict(self, data, new_user=False):
        for field in ['username', 'name', 'address', 'uti_places', 'care_places']:
            if field in data:
                setattr(self, field, data[field])
        if new_user and 'password' in data:
            self.set_password(data['password'])

    def __repr__(self):
        return '<User {}>'.format(self.username)


@login.user_loader
def load_user(id):
    return User.query.get(int(id))
