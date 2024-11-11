import { useEffect, useState } from "react";
import { ChevronDownIcon, LucideInfo } from "lucide-react";
import { linkBase } from "../../configuracoes";
import { useNavigate } from "react-router-dom";

export default function Categorias() {
  const [categorias, setCategorias] = useState([]);
  const [categoriaSelecionada, setCategoriaSelecionada] = useState("");
  const [produtos, setProdutos] = useState([]);
  const [loadingCategorias, setLoadingCategorias] = useState(true); // Loading state for categorias
  const [loadingProdutos, setLoadingProdutos] = useState(false); // Loading state for produtos

  const navigate = useNavigate();

  function onVerDetalhesProduto(titulo: string, id: string) {
    const query = new URLSearchParams();
    query.set("titulo", titulo);
    query.set("id", id);
    navigate(`/produto/detalhe?${query.toString()}`);
  }

  useEffect(() => {
    const fetchCategorias = async () => {
      try {
        const response = await fetch(linkBase + "/tipo/listar");
        if (response.ok) {
          const data = await response.json();
          console.log("Categorias fetched:", data); // Log for debugging

          // Ensure the response contains 'categorias'
          if (data && data.tipos) {
            setCategorias(data.tipos);
          } else {
            console.error("Erro: 'categorias' não encontrada na resposta.");
          }
        } else {
          console.error("Falha ao obter dados:", response.status);
        }
      } catch (error) {
        console.error("Erro ao buscar categorias:", error);
      } finally {
        setLoadingCategorias(false); // Set loading to false after the request
      }
    };

    fetchCategorias();
  }, []);

  useEffect(() => {
    if (!categoriaSelecionada) return;

    const fetchProdutos = async () => {
      setLoadingProdutos(true);
      try {
        const response = await fetch(
          linkBase + "/produtos/categoria/" + categoriaSelecionada
        );
        if (response.ok) {
          const data = await response.json();
          setProdutos(data.produtos);
        } else {
          console.error("Falha ao obter dados:", response.status);
        }
      } catch (error) {
        console.error("Erro ao buscar produtos:", error);
      } finally {
        setLoadingProdutos(false);
      }
    };

    fetchProdutos();
  }, [categoriaSelecionada]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold">Escolha entre as categorias</h1>
      <p className="mb-6">Escolha uma categoria para ver os produtos</p>

      {loadingCategorias ? (
        <p>Carregando categorias...</p>
      ) : (
        <div className="relative inline-block w-64 mb-8">
          <select
            value={categoriaSelecionada}
            onChange={(e) => setCategoriaSelecionada(e.target.value)}
            className="block appearance-none w-full bg-white border border-gray-300 hover:border-gray-400 px-4 py-2 pr-8 rounded-xl leading-tight focus:outline-none"
            aria-label="Select product category"
          >
            <option value="">Listagem de categorias</option>
            {categorias.length > 0 ? (
              categorias.map((categoria) => (
                <option key={categoria["id"]} value={categoria["id"]}>
                  {categoria["nome"]}
                </option>
              ))
            ) : (
              <option value="" disabled>
                Nenhuma categoria disponível
              </option>
            )}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <ChevronDownIcon className="h-4 w-4" />
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {loadingProdutos ? (
          <p>Carregando produtos...</p>
        ) : (
          produtos.map((produto) => (
            <div
              key={produto["id"]}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="p-6">
                <img
                  src={produto["imagem"]}
                  alt="Imagem do Produto"
                  width={400}
                  height={400}
                  className="rounded-lg w-full aspect-square object-cover"
                />
                <h2 className="text-xl font-semibold mb-2">
                  {produto["titulo"]}
                </h2>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold">
                    R$ {produto["preco"]}
                  </span>
                  <button
                    onClick={() =>
                      onVerDetalhesProduto(produto["titulo"], produto["id"])
                    }
                    className="flex bg-black hover:bg-neutral-950 transition text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="button"
                  >
                    Detalhes
                    <LucideInfo className="ml-1 h-5 w-5 mt-0.5" />
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
