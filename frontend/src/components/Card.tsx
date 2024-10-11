interface cardProps {
  imagem: string;
  titulo: string;
  descricao: string;
  preco: number;
}

const Card = ({ imagem, titulo, descricao, preco }: cardProps) => {
  return (
    <a
      href="#"
      className="overflow-hidden rounded-lg shadow transition hover:shadow-lg"
    >
      <img alt="" src={imagem} className="h-56 w-full object-cover" />

      <div className="bg-white p-4 sm:p-6">
        <span>
          <h3 className="mt-0.5 text-lg text-gray-900">{titulo}</h3>
        </span>

        <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
          {descricao}
        </p>

        <h5 className="mt-2 line-clamp-3 text-xl text-black font-semibold">
          {preco}
        </h5>
      </div>
    </a>
  );
};

export default Card;
