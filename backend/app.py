from flask import Flask
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

def criar_app():
    """ montando a base da aplicacao """
    app = Flask(__name__)
    #app.config.from_object("config.Config")

    # inicializao banco de dados
    db.init_app(app)

    with app.context():
        from . import routes

        db.create_all()

        return app