from flask import render_template

from . import produtos
from ..models import Promocoes, db

@produtos.route("/produtos/cadastrar", methods=["GET"])
def produtos_cadastrar():
    return "cadastro"