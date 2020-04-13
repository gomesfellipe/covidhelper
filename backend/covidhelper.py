from app import app, db
from app.models import User, Pacient, Nurse, Manager, Hospital


@app.shell_context_processor
def make_shell_context():
    return {'db': db, 'User': User, 'Pacient': Pacient, 'Nurse': Nurse, 'Manager': Manager, 'Hospital': Hospital}