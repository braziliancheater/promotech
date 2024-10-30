interface detalhesProps {
  imagem: string;
  titulo: string;
  descricao: string;
  preco: number;
}
import { ArrowRightIcon, Star } from "lucide-react";

const DetalhesCard = ({ imagem, titulo, descricao, preco }: detalhesProps) => {
  console.log(imagem, titulo, descricao, preco);

  return (
    <div className="flex flex-col">
      <section className="bg-muted">
        <div className="container grid md:grid-cols-2 gap-8 px-4 md:px-6">
          <div className="flex flex-col items-start gap-6">
            <img
              src={imagem}
              alt="Imagem do Produto"
              width={600}
              height={600}
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
              <p className="text-lg font-semibold">4.3 (120 reviews)</p>
            </div>
            <div className="flex items-center gap-4">
              <h2 className="text-4xl font-bold">R$ {preco}</h2>
              <button className="bg-black flex gap-2 font-semibold leading-6 p-2 rounded-lg text-white hover:bg-neutral-700 transition">
                Visistar
                <ArrowRightIcon className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="">
        <div className="container grid gap-12 px-4 md:px-6">
          <div className="grid gap-6">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Detalhes do Produto
            </h2>
            <div className="grid gap-4 text-muted-foreground">
              <p>
                The Acme Prism T-Shirt is a stylish and comfortable addition to
                your wardrobe. Crafted with a unique prism-inspired pattern,
                this tee adds a modern touch to your everyday look.
              </p>
              <p>
                Made with a blend of 60% combed ringspun cotton and 40%
                polyester jersey, the Acme Prism T-Shirt is soft, breathable,
                and durable. The fabric is designed to keep you cool and
                comfortable throughout the day.
              </p>
            </div>
          </div>
          <div className="grid gap-6">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Especificações do Produto
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="grid gap-2">
                <h3 className="text-lg font-semibold">Material</h3>
                <p className="text-muted-foreground">
                  60% combed ringspun cotton, 40% polyester jersey
                </p>
              </div>
              <div className="grid gap-2">
                <h3 className="text-lg font-semibold">Fit</h3>
                <p className="text-muted-foreground">
                  Regular fit, true to size
                </p>
              </div>
              <div className="grid gap-2">
                <h3 className="text-lg font-semibold">Care Instructions</h3>
                <p className="text-muted-foreground">
                  Machine wash cold, tumble dry low
                </p>
              </div>
              <div className="grid gap-2">
                <h3 className="text-lg font-semibold">Origin</h3>
                <p className="text-muted-foreground">Made in USA</p>
              </div>
            </div>
          </div>
          <div className="grid gap-6">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Related Products
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DetalhesCard;
