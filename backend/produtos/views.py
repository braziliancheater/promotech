from flask import render_template, jsonify

from . import produtos
from ..models import Promocoes, db
import requests

@produtos.route("/produtos/cadastrar", methods=["GET"])
def produtos_cadastrar():
    return "cadastro"

@produtos.route("/produtos/dummy", methods=["GET"])
def produtos_dummy():
    try:
        r = requests.get("https://dummyjson.com/products?limit=10&skip=10&select=title,price,description,images")
        r_produtos = r.json()
        if r.status_code == 200:
            novo_produto = Promocoes(
                nome=r_produtos["products"]["title"],
                descricao=r_produtos["products"]["description"],
                preco=r_produtos["products"]["price"],
                site="#",
                imagem=r_produtos["products"]["images"][0]
            )
        
    except Exception as e:
        return str(e), 500

@produtos.route("/produtos/listar", methods=["GET"])
def produtos_listar():
    try:
        return 
    except Exception as e:
        return e, 500
