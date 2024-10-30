import { useNavigate, useSearchParams } from "react-router-dom";
import DetalhesCard from "../components/DetalhesProduto/DetalhesCard";
import Header from "../components/Header";
import { buscar_produto_por_id } from "../api/produtos/api";
import { useEffect, useState } from "react";
import { ChevronLeftIcon } from "lucide-react";

function DetalhesProduto() {
  const navigate = useNavigate();
  const [paramsPesquisa] = useSearchParams();
  const id = paramsPesquisa.get("id");

  const [produto, setProduto] = useState(null);

  useEffect(() => {
    const fetchProduto = async () => {
      try {
        const response = await buscar_produto_por_id(id);
        console.log(response[0]);
        setProduto(response[0]);
      } catch (error) {
        console.error("Erro ao buscar produto:", error);
      }
    };

    if (id) {
      fetchProduto();
    }
  }, [id]);

  return (
    <div>
      <div>
        <Header />
      </div>

      <main className="flex flex-col p-4">
        <div className="justify-left items-center">
          <button
            onClick={() => navigate(-1)}
            className="text-black transition-all duration-300 ease-in-out"
          >
            <ChevronLeftIcon />
            Voltar
          </button>
        </div>

        {produto ? (
          <DetalhesCard
            imagem={produto["imagem"]}
            titulo={produto["titulo"]}
            descricao={produto["descricao"]}
            preco={produto["preco"]}
          />
        ) : (
          <p>Carregando...</p>
        )}
      </main>
    </div>
  );
}

export default DetalhesProduto;
