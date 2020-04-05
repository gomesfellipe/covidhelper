from app import db
from flask import jsonify, request, url_for, g, abort
from app.api import bp
from app.models import User
from app.api.errors import bad_request
from app.api.auth import token_auth

@bp.route('/hospitals', methods=['GET'])
def hospitals():
    """ This route should return a json object containing the informations of all hospitals in the database 
    and the information should be available to everyone """
    return {
        "items": [
            {
                "id": 1,
                "name": "Santa Casa Araraquara",
                "address": "Av. José Bonifácio, 794 - Centro, Araraquara - SP, 14801-150",
                "total_places": 200,
                "available_places": 160
            }, {
                "id": 2,
                "name": "Santa Casa Araraquara",
                "address": "Av. José Bonifácio, 794 - Centro, Araraquara - SP, 14801-150",
                "total_places": 200,
                "available_places": 160
            }
        ]
    }