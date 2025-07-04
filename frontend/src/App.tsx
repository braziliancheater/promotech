import { useEffect, useState } from "react";
import Card from "./components/Card";
import { v4 } from "uuid";
import * as configuracoes from "./configuracoes";

function App() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    const fetchProdutos = async () => {
      try {
        const response = await fetch(
          // Obtem o link do .env
          configuracoes.linkBase + "/produtos/listar"
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
  }, []);

  return (
    <div>
      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-6 ">
        {produtos.map((produto) => (
          <Card
            key={v4()}
            id={produto["id"]}
            imagem={produto["imagem"]}
            titulo={produto["titulo"]}
            descricao={produto["descricao"]}
            preco={produto["preco"]}
          />
        ))}
      </main>
    </div>
  );
}

export default App;
