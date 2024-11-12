import { useEffect, useState } from "react";
import { linkBase } from "../../configuracoes";

function Processadores() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    const fetchProdutos = async () => {
      try {
        const response = await fetch(linkBase + "/produtos/categoria/1");
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
  }, []);

  const salvarNoBanco = (produto: any) => {
    localStorage.setItem("processadores", JSON.stringify([produto]));
  };

  return (
    <div className="flex justify-center p-4">
      <main className="grid grid-cols-2 gap-4">
        {produtos.map((produto) => (
          <div
            key={produto["id"]}
            className="bg-white p-4 rounded-lg shadow-lg text-center"
          >
            <a
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textDecoration: "none",
              }}
            >
              <img
                alt={produto["titulo"]}
                src={produto["imagem"]}
                className="h-48 rounded-lg object-cover"
                loading="lazy"
              />
              <div className="mt-4">
                <h3 className="text-black text-lg font-semibold">
                  {produto["titulo"]}
                </h3>
                <h5 className="text-green-500 text-xl font-bold">
                  R$ {produto["preco"]}
                </h5>
              </div>
            </a>
            <button
              onClick={() => salvarNoBanco(produto)}
              className="mt-4 bg-black text-white py-2 px-4 rounded-lg w-full cursor-pointer"
            >
              Adicionar
            </button>
          </div>
        ))}
      </main>
    </div>
  );
}

export default Processadores;
