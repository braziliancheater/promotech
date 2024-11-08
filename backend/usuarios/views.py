import requests
from flask import Blueprint, request, jsonify
from werkzeug.security import generate_password_hash, check_password_hash
from flask_limiter import Limiter
from flask_limiter.util import get_remote_address
from . import usuarios
from ..models import Usuario
from .. import db, jwt, jwt_required, create_access_token

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
    
    if not nome or not email or not senha:
        return jsonify({"error": "Todos os campos são obrigatórios"}), 400
    
    # validacao basica de @
    if "@" not in email or "." not in email.split("@")[-1]:
        return jsonify({"error": "Email inválido"}), 400
    
    # fazendo a senha virar hash
    senha_hash = generate_password_hash(senha)
    
    try:
        usuario = Usuario(
            nome=nome,
            email=email,
            senha=senha_hash
        )
        db.session.add(usuario)
        db.session.commit()
        return jsonify({"usuario": usuario.id}), 200
    except Exception as e:
        return jsonify({"error": f"Erro ao cadastrar usuario: {str(e)}"}), 500

@usuarios.route("/usuario/login", methods=["POST"])
@limiter.limit("5 per minute")  # rate limit de 5 minutos
def usuarios_login():
    dados = request.get_json()
    
    if not dados:
        return jsonify({"error": "JSON não informado"}), 400
    
    email = dados.get("email")
    senha = dados.get("senha")
    
    if not email or not senha:
        return jsonify({"error": "Email e senha são obrigatórios"}), 400
    
    # procura o usuario via email
    usuario = Usuario.query.filter_by(email=email).first()
    
    if not usuario or not check_password_hash(usuario.senha, senha):
        return jsonify({"error": "Credenciais inválidas"}), 401
    
    # cria o token jwt
    access_token = create_access_token(identity=usuario.id)
    return jsonify({"access_token": access_token}), 200

@usuarios.route("/usuario/logout", methods=["POST"])
@jwt_required()  # rota protegida por JWT
def usuarios_logout():
    return jsonify({"message": "Logout bem-sucedido"}), 200

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

