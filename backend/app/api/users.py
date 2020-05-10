from app import db
from flask import jsonify, request, url_for, g, abort
from app.api import bp
from app.models import User
from app.api.errors import bad_request
from app.api.auth import token_auth


@bp.route('/user', methods=['GET'])
@token_auth.login_required
def get_user():
    """
    Return all informations about the user currently logged in
    """
    return jsonify(User.query.get_or_404(g.current_user.id).to_dict())


@bp.route('/users/<int:id>', methods=['GET'])
@token_auth.login_required
def get_user_by_id(id):
    """
    This route should return a json object containing the informations 
    of the user with id <id> in the database. Available only for the logged responsible
    """

    if g.current_user.id != id:
        abort(403)

    return jsonify(User.query.get_or_404(id).to_dict())


@bp.route('/users', methods=['GET'])
@token_auth.login_required
def get_users():
    """
    This route should return a json object containing the informations 
    of all users in the database that the logged responsible have access
    """

    page = request.args.get('page', 1, type=int)
    per_page = min(request.args.get('per_page', 10, type=int), 100)
    search = request.args.get('search', '', type=str)
    data = User.to_collection_dict(User.query.filter(User.username.like("%{}%".format(search))), page, per_page, 'api.get_users')
    return jsonify(data)


@bp.route('/users', methods=['POST'])
def create_user():
    """
    This route should create a new user and return its informations
    """

    data = request.get_json() or {}
    if 'username' not in data or 'password' not in data or 'rg' not in data:
        return bad_request('must include username, password and rg fields')
    if User.query.filter_by(username=data['username']).first():
        return bad_request('please use a different username')
    if User.query.filter_by(rg=data['rg']).first():
        return bad_request('rg already registered')
    if 'email' in data and User.query.filter_by(email=data['email']).first():
        return bad_request('email already registered')
    user = User()
    user.from_dict(data, new_user=True)
    db.session.add(user)
    db.session.commit()
    response = jsonify(user.to_dict())
    response.status_code = 201
    response.headers['Location'] = url_for('api.get_user', id=user.id)
    return response


@bp.route('/users/<int:id>', methods=['PUT'])
@token_auth.login_required
def update_user(id):
    """
    This route should update an existing user and is available only for that user
    """

    if g.current_user.id != id and g.current_user.access < 1:
        abort(403)
    user = User.query.get_or_404(id)
    data = request.get_json() or {}
    if 'username' in data:
        return bad_request('you can not change your username')
    if 'email' in data and data['email'] != user.email and \
            User.query.filter_by(email=data['email']).first():
        return bad_request('please use a different email address')
    user.from_dict(data, new_user=False)
    db.session.commit()
    return jsonify(user.to_dict())


@bp.route('/users/<int:id>', methods=['DELETE'])
@token_auth.login_required
def delete_user(id):
    """
    This route should update an existing user and is available only for that user
    """

    if g.current_user.id != id and g.current_user.access < 1:
        abort(403)
    user = User.query.get_or_404(id)
    db.session.delete(user)
    db.session.commit()
    return jsonify(user.to_dict())
