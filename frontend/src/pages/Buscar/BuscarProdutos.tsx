import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { linkBase } from "../../configuracoes";
import Card from "../../components/Card";

export default function BuscarProdutos() {
  const [paramsPesquisa] = useSearchParams();
  const query = paramsPesquisa.get("nome");
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    const fetchProdutos = async () => {
      try {
        if (!query) return; // Optional: prevent fetching if there's no query

        const response = await fetch(
          linkBase + "/produtos/buscar?query=" + query,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (response.ok) {
          const data = await response.json();
          setProdutos(data.produtos);
        } else {
          console.error("Falha ao obter dados:", response.status);
        }
      } catch (error) {
        console.error("Erro ao obter dados:", error);
      }
    };

    fetchProdutos();
  }, [query]);

  return (
    <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <div className="col-span-4 justify-between flex">
        <h1 className="text-3xl font-bold">
          Exibindo resultados para: <span className="font-normal">{query}</span>
        </h1>
        <p>Exibindo {produtos.length} resultado(s)</p>
      </div>
      {produtos.map((produto) => (
        <Card
          key={produto["id"]}
          id={produto["id"]}
          imagem={produto["imagem"]}
          titulo={produto["titulo"]}
          descricao={produto["descricao"]}
          preco={produto["preco"]}
        />
      ))}
      {
        // caso não haja resultados exibe uma mensagem
        produtos.length === 0 && (
          <div className="col-span-4 justify-center flex">
            <h2 className="text-2xl font-bold">Nenhum resultado encontrado</h2>
          </div>
        )
      }
    </div>
  );
}
