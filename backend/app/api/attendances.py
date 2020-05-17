from app import db
from flask import jsonify, request, abort, url_for
from app.api import bp
from app.models import User, Attendance
from app.api.errors import bad_request
from app.api.auth import token_auth


@bp.route('/attendances', methods=['GET'])
@token_auth.login_required
def get_attendances():
    """
    This route should return a json object containing the informations 
    of all attendances in the database that the logged responsible have access
    """

    page = request.args.get('page', 1, type=int)
    per_page = min(request.args.get('per_page', 10, type=int), 100)
    search = request.args.get('search', '', type=str)
    data = Attendance.to_collection_dict(Attendance.query, page, per_page, 'api.get_attendances')
    return jsonify(data)


@bp.route('/attendances', methods=['POST'])
def create_attendance():
    """
    This route should create a new attendance and return its informations
    """

    data = request.get_json() or {}
    print(data)
    #TODO: Verifications
    attendance = Attendance()
    print()
    print()
    print(attendance.pacient.name)
    attendance.from_dict(data)
    print(attendance)
    db.session.add(attendance)
    db.session.commit()
    response = jsonify(attendance.to_dict())
    response.status_code = 201
    response.headers['Location'] = url_for('api.create_attendance')
    return response


@bp.route('/attendances/<int:id>', methods=['GET'])
@token_auth.login_required
def get_attendances_by_id(id):
    """
    This route should return a json object containing the informations 
    of the attendance with id <id> in the database. Available only for the pacient or the logged responsible
    """
    attendance = Attendance.get_by_id(id)
    if not attendance or g.current_user.id != attendance.pacient.id:
        abort(403)

    return jsonify(Attendance.query.get_or_404(id).to_dict())