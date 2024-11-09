from flask import Flask
from flask_jwt_extended import JWTManager, create_access_token, jwt_required, get_jwt_identity
from flask_sqlalchemy import SQLAlchemy
from .utils.utilidades import Utilidades
from flask_cors import CORS

app = Flask(__name__)
db = SQLAlchemy()
CORS(app)
jwt = JWTManager(app)

app.config['SECRET_KEY'] = '3402997433327cfb3aeee8e3be0fb84b6b1c2ab8492ea18c1cbe21f93a84ba2c'
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///banco_backend.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

def criar_app():
    """ montando a base da aplicacao """
    Utilidades.limpar_tela()
    Utilidades.mostar_logo()

    from . import models

    try:
        from .index import index as index_blueprint
        app.register_blueprint(index_blueprint)
        print('server', 'blueprint index criado com sucesso')
    except Exception as e:
        print('server', f'erro ao criar blueprint index: {e}')

    try:
        from .produtos import produtos as prod_blueprint
        app.register_blueprint(prod_blueprint)
        print('server', 'blueprint produtos criado com sucesso')
    except Exception as e:
        print('server', f'erro ao criar blueprint produtos: {e}')

    try:
        from .usuarios import usuarios as usr_blueprint
        app.register_blueprint(usr_blueprint)
        print('server', 'blueprint usuarios criado com sucesso')
    except Exception as e:
        print('server', f'erro ao criar blueprint usuarios: {e}')
        
    try:
        from .tipo import tipo as tip_blueprint
        app.register_blueprint(tip_blueprint)
        print('server', 'blueprint tipo criado com sucesso')
    except Exception as e:
        print('server', f'erro ao criar tipo usuarios: {e}')

    # inicializao banco de dados
    db.init_app(app)

    with app.app_context():
        if (db.create_all()):
            print('server', "criando tabelas")
        else:
            print('server', "tabelas ja criadas, continuando")

        return app