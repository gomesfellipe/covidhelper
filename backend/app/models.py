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


class User(UserMixin, PaginatedAPIMixin, db.Model):
    id = db.Column(db.Integer, primary_key=True)
    
    username = db.Column(db.String(64), index=True, unique=True)
    password_hash = db.Column(db.String(128))
    email = db.Column(db.String(120), index=True, unique=True)
    name = db.Column(db.String(140))
    gender = db.Column(db.Integer)
    age = db.Column(db.Integer)
    rg = db.Column(db.Integer)
    
    token = db.Column(db.String(32), index=True, unique=True)
    token_expiration = db.Column(db.DateTime)
    access = db.Column(db.Integer, default=0)
    score = db.Column(db.Float(10, 2))


    def is_manager_of(self, hospital):
        return self.hospitals.filter(
            users.c.hospital_id == hospital.id).count() > 0

    def promote_to_user(self):
        return self.access==0

    def promote_to_pacient(self):
        return self.access==1

    def promote_to_nurse(self):
        return self.access==2    

    def promote_to_manager(self):
        return self.access==3

    def promote_to_admin(self):
        return self.access==4

    def add_attendance(self, hospital, responsible, temperature):
        attendance = Attendance(pacient=self, hospital=hospital, responsible=responsible, temperature=temperature)
        db.session.commit()
        return attendance

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

    def to_dict(self, include_email=False, include_rg=False):
        data = {
            'id': self.id,
            'username': self.username,
            'rg': self.rg,
            'access': self.access,
            'score': self.score,
            '_links': {
                'self': url_for('api.get_user', id=self.id)
            }
        }
        if include_email:
            data['email'] = self.email
        if include_rg:
            data['rg'] = self.rg
        return data

    def from_dict(self, data, new_user=False):
        for field in ['username', 'name', 'rg', 'access', 'score']:
            if field in data:
                setattr(self, field, data[field])
        if new_user and 'password' in data:
            self.set_password(data['password'])

    def __repr__(self):
        return '<User {}>'.format(self.username)


class Attendance(PaginatedAPIMixin, db.Model):
    id = db.Column(db.Integer, primary_key=True)
    pacient_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    responsible_id = db.Column(db.Integer, db.ForeignKey('user.id'))

    pacient = db.relationship('User', foreign_keys=[pacient_id], backref='attendances')
    responsible = db.relationship('User', foreign_keys=[responsible_id])

    hospital_id = db.Column(db.Integer, db.ForeignKey('hospital.id'))
    
    timestamp = db.Column(db.DateTime, index=True, default=datetime.utcnow)

    #General info
    height= db.Column(db.Integer)
    weight = db.Column(db.Integer)
    temperature = db.Column(db.Numeric)

    #CBC + PCR
    hemacias = db.Column(db.Float(10, 2))
    hematocritos = db.Column(db.Float(10, 2))
    hemoglobinas = db.Column(db.Float(10, 2))
    vcm = db.Column(db.Float(10, 2))
    hcm = db.Column(db.Float(10, 2))
    chcm = db.Column(db.Float(10, 2))
    rdw = db.Column(db.Float(10, 2))
    eritoblastos = db.Column(db.Integer)
    leucocitos = db.Column(db.Integer)
    mielocitos = db.Column(db.Integer)
    metamielocitos = db.Column(db.Integer)
    bastonetes = db.Column(db.Integer)
    segmentados = db.Column(db.Integer)
    neutrofilos_totais = db.Column(db.Integer)
    eosinofilos = db.Column(db.Integer)
    basofilos = db.Column(db.Integer)
    linfocitos = db.Column(db.Integer)
    monocitos = db.Column(db.Integer)
    plasmocitos = db.Column(db.Integer)
    plaquetas = db.Column(db.Float(10, 2))
    vmp = db.Column(db.Float(10, 2))
    pcr = db.Column(db.Float(10, 2))

    #Respiratory Infections
    influenza = db.Column(db.Integer)
    parainfluenza = db.Column(db.Integer)
    h1n1 = db.Column(db.Integer)
    chlamidophila_plenumonae = db.Column(db.Integer)
    rhinovirus_enterovirus = db.Column(db.Integer)
    virus_sincicial = db.Column(db.Integer)
    outros_coranavirus = db.Column(db.Integer)
    outras_infeccoes_respiratorias = db.Column(db.Integer)

    #Model prediction and medical confirmation
    sars_cov_2_labtest_score = db.Column(db.Float(10, 2))
    sars_cov_2_labtest_pred = db.Column(db.Integer)
    sars_cov_2_confirmation = db.Column(db.Integer)
    
    @staticmethod
    def get_by_id(id):
        return Attendance.query.filter_by(id=id).first()

    def to_dict(self):
        data = {
            'id': self.id,
            'username': self.pacient.username,
            'timestamp': self.timestamp,
        }
        return data

    def __repr__(self):
        return '<Attendance {}>'.format(self.id)


class Hospital(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    attendances = db.relationship('Attendance', backref='hospital', lazy='dynamic')
    name = db.Column(db.String(50))
    address = db.Column(db.String(140))
    uti_places = db.Column(db.Integer)
    care_places = db.Column(db.Integer)
    available_uti_places = db.Column(db.Integer)
    available_care_places = db.Column(db.Integer)

    users = db.relationship('User', secondary=users, lazy='dynamic',
        backref=db.backref('hospitals', lazy='dynamic'))

    def set_manager(self, user):
        if user.is_manager_of(self):
            return None
        user.hospitals.append(self)
        user.promote_to_manager()
        db.session.commit()
        return None

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


@login.user_loader
def load_user(id):
    return User.query.get(int(id))
