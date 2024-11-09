import requests
from flask import Blueprint, request, jsonify
from werkzeug.security import generate_password_hash, check_password_hash
from flask_limiter import Limiter
from flask_limiter.util import get_remote_address
from . import usuarios
from ..models import Usuario
from .. import db, jwt, jwt_required, create_access_token, get_jwt_identity

limiter = Limiter(get_remote_address)

@usuarios.route("/usuario/cadastrar", methods=["POST"])
@limiter.limit("5 per minute")  # rate limit de 5 minutos
def usuarios_cadastrar():
    dados = request.get_json()
    
    if not dados:
        return jsonify({"error": "JSON não informado"}), 400
    
    nome = dados.get("nome")
    email = dados.get("email")
    senha = dados.get("senha")

    # se nome for menor que 3 caracteres, retornar erro
    if len(nome) < 3:
        return jsonify({"error": "Nome deve ter pelo menos 3 caracteres"}), 400
    
    if not nome or not email or not senha:
        return jsonify({"error": "Todos os campos são obrigatórios"}), 400
    
    # validacao basica de @
    if "@" not in email or "." not in email.split("@")[-1]:
        return jsonify({"error": "Email inválido"}), 400
    
    # fazendo a senha virar hash
    senha_hash = generate_password_hash(senha)
    
    # verificando se ja existe um usuario com esse email
    usuario = Usuario.query.filter_by(email=email).first()
    
    if usuario:
        return jsonify({"error": "Usuário com esse email ja existe"}), 400
    
    # verificando se ja existe um usuario com esse nome
    usuario = Usuario.query.filter_by(nome=nome).first()
    
    if usuario:
        return jsonify({"error": "Usuário com esse nome ja existe"}), 400

    try:
        usuario = Usuario(
            nome=nome,
            email=email,
            senha=senha_hash
        )
        db.session.add(usuario)
        db.session.commit()

        # cria o token jwt
        access_token = create_access_token(identity=usuario.id)
        return jsonify({"access_token": access_token}), 201
    except Exception as e:
        return jsonify({"error": f"Erro ao cadastrar usuario: {str(e)}"}), 500

@usuarios.route("/usuario/login", methods=["POST"])
@limiter.limit("5 per minute")  # rate limit de 5 minutos
def usuarios_login():
    dados = request.get_json()
    
    if not dados:
        return jsonify({"error": "JSON não informado"}), 400
    
    usuario = dados.get("nome")
    senha = dados.get("senha")
    
    if not usuario or not senha:
        return jsonify({"error": "Email e senha são obrigatórios"}), 400
    
    # procura o usuario via email
    usuario = Usuario.query.filter_by(nome=usuario).first()
    
    if not usuario or not check_password_hash(usuario.senha, senha):
        return jsonify({"error": "Credenciais inválidas"}), 401
    
    # cria o token jwt
    access_token = create_access_token(identity=usuario.id)
    return jsonify({"access_token": access_token}), 200

@usuarios.route("/usuario/logout", methods=["POST"])
@jwt_required()  # rota protegida por JWT
def usuarios_logout():
    return jsonify({"message": "Logout bem-sucedido"}), 200

@usuarios.route("/usuario/me", methods=["GET"])
@jwt_required()
def usuarios_me():
    user_id = get_jwt_identity()
    
    try:
        usuario = Usuario.query.get(user_id)
        
        if not usuario:
            return jsonify({"error": "Usuário não encontrado"}), 404
        
        return jsonify({
            "id": usuario.id,
            "nome": usuario.nome,
            "email": usuario.email
        }), 200
    except Exception as e:
        return jsonify({"error": f"Erro ao obter dados do usuário: {str(e)}"}), 500
    
@usuarios.route("/usuario/listar", methods=["GET"])
@jwt_required()  # rota protegida por JWT
def usuarios_listar():
    try:
        usuarios = Usuario.query.all()
        usuarios_list = [{
            "id": usuario.id,
            "nome": usuario.nome,
            "email": usuario.email
        } for usuario in usuarios]
        
        return jsonify({"usuarios": usuarios_list}), 200
    except Exception as e:
        return jsonify({"error": f"Erro ao listar usuarios: {str(e)}"}), 500

