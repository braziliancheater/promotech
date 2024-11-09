from . import tipo
from ..models import Tipo
from .. import db

@tipo.route('/tipo/listar', methods=['GET'])
def listar_tipos():
    try:
        tipo = Tipo.query.all()
        tipos_list = []
        
        for tipo in tipo:
            tipos_list.append({
                "id": tipo.id,
                "nome": tipo.nome,
                "descricao": tipo.descricao,
            })
        
        return {"tipos": tipos_list}, 200 
    except Exception as e:
        return {"error": f"Erro ao listar tipos: {e}"}, 500