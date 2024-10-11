import Card from "./components/Card";
import Header from "./components/Header";
import { v4 } from "uuid";

function App() {
  const produtos = [
    {
      imagem: "https://via.placeholder.com/300",
      titulo: "Produto 1",
      descricao: "Esse produto vai mudar sua vida!",
      preco: 29.99,
    },
    {
      imagem: "https://via.placeholder.com/300",
      titulo: "Produto 2",
      descricao: "Esse produto vai mudar sua vida!",
      preco: 19.99,
    },
    {
      imagem: "https://via.placeholder.com/300",
      titulo: "Produto 3",
      descricao: "Esse produto vai mudar sua vida!",
      preco: 59.99,
    },
    {
      imagem: "https://via.placeholder.com/300",
      titulo: "Produto 4",
      descricao: "Esse produto vai mudar sua vida!",
      preco: 49.99,
    },
  ];

  return (
    <div>
      <div>
        <Header />
      </div>

      <main className="grid grid-cols-4 gap-4 p-6 ">
        {produtos.map((produto) => (
          <Card
            key={v4}
            imagem={produto.imagem}
            titulo={produto.titulo}
            descricao={produto.descricao}
            preco={produto.preco}
          />
        ))}
      </main>
    </div>
  );
}

export default App;
