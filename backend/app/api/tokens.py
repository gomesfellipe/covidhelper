from flask import jsonify, g
from app import db
from app.api import bp
from app.api.auth import basic_auth, token_auth


@bp.route('/tokens', methods=['POST'])
@basic_auth.login_required
def get_token():
    """ This route should create a new token and return to the user based on the authentication with username and password """

    token = g.current_user.get_token()
    id = g.current_user.id
    db.session.commit()
    return jsonify({'token': token, 'id': id})


@bp.route('/tokens', methods=['DELETE'])
@token_auth.login_required
def revoke_token():
    """ This route should destroy the token previously created by the user """

    g.current_user.revoke_token()
    db.session.commit()
    return '', 204


@bp.route('/tokens', methods=['GET'])
@token_auth.login_required
def check_token():
    """ This route should check the token previously created by the user and return its id"""
    return jsonify({'id': g.current_user.id})
