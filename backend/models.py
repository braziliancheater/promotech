from . import db

class Tipo(db.Model):
    __tablename__ = "tipo"

    id = db.Column(db.Integer, primary_key=True)
    tipo_descricao = db.Column(db.String())
    watts = db.Column(db.Integer(), nullable=False)

class Promocoes(db.Model):
    __tablename__ = "promocoes"

    id = db.Column(db.Integer, primary_key=True)
    nome = db.Column(db.String(255), nullable=False)
    descricao = db.Column(db.String(), nullable=True)
    imagem = db.Column(db.String(), nullable=True)
    preco = db.Column(db.String(255), nullable=False)
    site = db.Column(db.String(255), nullable=False)
    tipo_id = db.Column(db.Integer(), nullable=False)
    criado_em = db.Column(db.DateTime, server_default=db.func.now())
    atualizado_em = db.Column(db.DateTime, server_default=db.func.now(), server_onupdate=db.func.now())

class Usuario(db.Model):
    __tablename__ = "usuarios"
    
    id = db.Column(db.Integer, primary_key=True)
    nome = db.Column(db.String(255), nullable=False)
    email = db.Column(db.String(255), nullable=False)
    senha = db.Column(db.String(255), nullable=False)