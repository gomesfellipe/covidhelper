from app import db
from flask import jsonify, request, url_for, g, abort
from app.api import bp
from app.models import Attendance
from app.api.errors import bad_request
from app.api.auth import token_auth


@bp.route('/predict_labtest/<int:id>', methods=['GET'])
@token_auth.login_required
def predict_labtest(id):
    """
    Return all informations about the user currently logged in
    """
    return jsonify(Attendance.query.get_or_404(id).to_dict())

