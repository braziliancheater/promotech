import requests

from . import produtos
from ..models import Promocoes
from .. import db

@produtos.route("/produtos/cadastrar", methods=["POST"])
def produtos_cadastrar():
    return "cadastro"

@produtos.route("/produtos/dummy", methods=["GET"])
def produtos_dummy():
    url = "https://dummyjson.com/products"
    try:
        r = requests.get(url)
        if (r.status_code == 200):
            r_json = r.json()
            
            #print(f"Tamanho: {r_json["limit"]}")
            for i in range(r_json["limit"]):
                produto = Promocoes(
                    titulo=r_json["products"][i]["title"],
                    descricao=r_json["products"][i]["description"],
                    preco=r_json["products"][i]["price"],
                    site="#",
                    imagem=r_json["products"][i]["images"][0]
                )
                db.session.add(produto)
                db.session.commit()
            return "Ok", 200
        else: 
            return f"Erro ao atingir API {url}, Code: {r.status_code}"
    except Exception as e:
        return f"Erro Geral {e}"
    
@produtos.route("/produtos/listar", methods=["GET"])
def produtos_listar():
    try:
        produtos = Promocoes.query.all()
        produtos_list = []
        
        for produto in produtos:
            produtos_list.append({
                "titulo": produto.titulo,
                "descricao": produto.descricao,
                "preco": produto.preco,
                "site": produto.site,
                "imagem": produto.imagem
            })
        
        return {"produtos": produtos_list}, 200 
    except Exception as e:
        return {"error": f"Erro ao listar produtos: {e}"}, 500 