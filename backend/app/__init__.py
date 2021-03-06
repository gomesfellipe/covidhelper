from flask import Flask
from config import Config
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_login import LoginManager
from flask_cors import CORS

app = Flask(__name__)
app.config.from_object(Config)
db = SQLAlchemy(app) # render_as_batch=True to allow delete columns while in sqlite. Remove after changing
migrate = Migrate(app, db)
login = LoginManager(app)
login.login_view = 'login'
CORS(app)

from app.api import bp as api_bp
app.register_blueprint(api_bp, url_prefix='/api')

from app import models