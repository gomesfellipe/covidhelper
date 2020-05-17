from app import app, db
from flask import jsonify, request, url_for, g, abort, send_from_directory
from app.api import bp
from app.models import User
from app.api.errors import bad_request
from app.api.auth import token_auth


@bp.route('/media/<path:filename>', methods=['GET'])
def download_file(filename):
    return send_from_directory(app.config['MEDIA_FOLDER'], filename)
