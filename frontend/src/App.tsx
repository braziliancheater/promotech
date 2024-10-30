import { useEffect, useState } from "react";
import Card from "./components/Card";
import Header from "./components/Header";
import { v4 } from "uuid";

function App() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    const fetchProdutos = async () => {
      try {
        const response = await fetch(
          "http://localhost:5000/produtos/listar" //"https://api.brazilian.lol/produtos/listar"
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
      <div>
        <Header />
      </div>

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
