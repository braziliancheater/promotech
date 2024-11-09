interface detalhesProps {
  imagem: string;
  titulo: string;
  descricao: string;
  preco: number;
}
import { ArrowRightIcon, Star } from "lucide-react";
import { useEffect, useState } from "react";

const DetalhesCard = ({ imagem, titulo, descricao, preco }: detalhesProps) => {
  const [similares, setSimilares] = useState([]);

  useEffect(() => {
    // buscando produtos similares
    fetch(
      "http://localhost:5000/produtos/similar?nome_do_produto=" +
        titulo.split(" ")[0],
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => setSimilares(data.produtos))
      .catch((error) => {
        console.error("Erro ao buscar produtos similares:", error);
      });
  }, similares);

  return (
    <div className="flex flex-col">
      <section className="bg-muted">
        <div className="justify-center grid md:grid-cols-2 gap-8 px-4 md:px-6">
          <div className="flex flex-col items-start gap-6">
            <img
              src={imagem}
              alt="Imagem do Produto"
              width={400}
              height={400}
              className="rounded-lg w-full aspect-square object-cover"
            />
          </div>
          <div className="flex flex-col items-start gap-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
              {titulo}
            </h1>
            <p className="text-muted-foreground text-lg">{descricao}</p>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <Star />
                <Star />
                <Star />
                <Star className="fill-muted stroke-muted-foreground" />
                <Star className="fill-muted stroke-muted-foreground" />
              </div>
              <p className="text-lg font-semibold">Nenhuma review</p>
            </div>
            <div className="flex items-center gap-4">
              <h2 className="text-4xl font-bold">R$ {preco}</h2>
              <button className="bg-black flex gap-2 font-semibold leading-6 p-2 rounded-lg text-white hover:bg-neutral-700 transition">
                Visitar Site
                <ArrowRightIcon className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="">
        <div className="justify-center grid gap-12 px-4 md:px-6">
          <div className="grid gap-6">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Detalhes do Produto
            </h2>
            <div className="grid gap-4 text-muted-foreground">
              <p>{descricao}</p>
            </div>
          </div>
          <div className="grid gap-6">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Especificações do Produto
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="grid gap-2">
                <h3 className="text-lg font-semibold">Material</h3>
                <p className="text-muted-foreground">Nao informado</p>
              </div>
              <div className="grid gap-2">
                <h3 className="text-lg font-semibold">Tipo</h3>
                <p className="text-muted-foreground">Nao informado</p>
              </div>
            </div>
          </div>
          <div className="grid gap-6">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Produtos Relacionados
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {similares.map((produto) => (
                <div key={produto["id"]}>
                  <a href={`/produto/detalhe?id=${produto["id"]}`}>
                    <img
                      src={produto["imagem"]}
                      alt="Imagem do Produto"
                      width={400}
                      height={400}
                      className="rounded-lg w-full aspect-square object-cover"
                    />
                    <h3 className="text-lg font-semibold">
                      {produto["titulo"]}
                    </h3>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DetalhesCard;
