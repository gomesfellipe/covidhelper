from datetime import datetime, timedelta
from flask_login import UserMixin
from werkzeug.security import generate_password_hash, check_password_hash
from app import app, login, db
from flask import session, url_for
import json
from time import time
import base64
import os


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
    __tablename__ = 'hospital'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50))
    managers = db.relationship('Manager', backref='hospital', lazy='dynamic')
    
    def add_manager(self, username=username):
        manager = Manager(username=username, hospital=self)
        db.session.commit()
        return manager


class User(UserMixin, PaginatedAPIMixin, db.Model):
    __tablename__ = 'user'
    type = db.Column(db.String(20))

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(64), index=True, unique=True)
    email = db.Column(db.String(120), index=True, unique=True)
    password_hash = db.Column(db.String(128))
    name = db.Column(db.String(140))
    address = db.Column(db.String(140))
    token = db.Column(db.String(32), index=True, unique=True)
    token_expiration = db.Column(db.DateTime)

    __mapper_args__ = {
        'polymorphic_on': type,
        'polymorphic_identity': 'user'
    }

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
    def get_user_object(id):
        return User.query.filter_by(id=id).first()

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


class Pacient(User):
    score = db.Column(db.Float(10, 2))

    __mapper_args__ = {
        'polymorphic_identity': 'pacient'
    }

    def __repr__(self):
        return '<Pacient {}>'.format(self.username)


class Nurse(User):

    #nurse_id = db.Column(db.ForeignKey('user.id'))
    #nurse_hospital_id = db.Column(db.ForeignKey('hospital.id'))

    __mapper_args__ = {
        'polymorphic_identity': 'nurse'
    }

    def __repr__(self):
        return '<Nurse {}>'.format(self.username)


class Manager(User):

    hospital_id = db.Column(db.Integer, db.ForeignKey('hospital.id'))

    uti_places = db.Column(db.Integer)
    care_places = db.Column(db.Integer)
    available_uti_places = db.Column(db.Integer)
    available_care_places = db.Column(db.Integer)

    __mapper_args__ = {
        'polymorphic_identity': 'manager'
    }

    def __repr__(self):
        return '<Manager {}>'.format(self.username)


@login.user_loader
def load_user(id):
    return User.query.get(int(id))
