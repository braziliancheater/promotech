import React, { useState, useEffect } from "react";

// Definindo a interface para os tipos de produtos
interface Tipo {
  id: number;
  nome: string;
  descricao: string;
}

function Cadastrar() {
  const [produto, setProduto] = useState({
    titulo: "",
    descricao: "",
    valor: "",
    site: "",
    tipoId: "", // Para armazenar o id do tipo selecionado
    fotos: [] as File[],
    fotosBase64: [] as string[],
  });

  // Tipando o estado para garantir que 'tipos' seja um array de objetos do tipo 'Tipo'
  const [tipos, setTipos] = useState<Tipo[]>([]); // Estado para armazenar os tipos
  const [loading, setLoading] = useState(true); // Para mostrar o carregamento
  const [user, setUser] = useState(null);

  // Carregar os tipos ao montar o componente
  useEffect(() => {
    const fetchTipos = async () => {
      try {
        const response = await fetch("http://localhost:5000/tipo/listar");
        const data = await response.json();
        if (response.ok) {
          setTipos(data.tipos);
          setLoading(false);
        } else {
          alert(`Erro ao carregar tipos: ${data.error || "Erro desconhecido"}`);
        }
      } catch (error) {
        console.error("Erro ao carregar tipos:", error);
        alert("Ocorreu um erro ao carregar os tipos.");
      }
    };

    fetchTipos();
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setProduto({ ...produto, [name]: value });
  };

  const handleTipoChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setProduto({ ...produto, tipoId: e.target.value }); // Atualiza o tipo selecionado
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files ?? []);
    if (files.length > 0) {
      const file = files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setProduto((prevProduto) => ({
          ...prevProduto,
          fotosBase64: [reader.result as string],
          fotos: files,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !produto.titulo ||
      !produto.descricao ||
      !produto.valor ||
      !produto.site ||
      produto.fotosBase64.length === 0 ||
      !produto.tipoId
    ) {
      alert("Todos os campos são obrigatórios!");
      return;
    }

    const data = {
      titulo: produto.titulo,
      descricao: produto.descricao,
      valor: produto.valor,
      site: produto.site,
      tipo_id: produto.tipoId, // Envia o id do tipo selecionado
      fotos: produto.fotosBase64[0],
    };

    try {
      const response = await fetch("http://localhost:5000/produtos/cadastrar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      if (response.ok) {
        alert("Produto cadastrado com sucesso!");
        setProduto({
          titulo: "",
          descricao: "",
          valor: "",
          site: "",
          tipoId: "", // Resetar o tipo
          fotos: [],
          fotosBase64: [],
        });
      } else {
        alert(`Erro: ${result.error || "Erro desconhecido"}`);
      }
    } catch (error) {
      console.error("Erro ao cadastrar produto:", error);
      alert("Ocorreu um erro ao cadastrar o produto.");
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("access_token");

    if (token) {
      fetch("https://api.promotecnologia.com.br/usuario/me", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => response.json())
        .then((data) => setUser(data))
        .catch((error) => {
          console.error("Erro ao carregar os dados do usuário:", error);
        });
    } else {
      window.location.href = "/login";
    }
  }, []);

  if (!user) {
    return (
      <div className="container mx-auto p-4">
        <div className="card mx-auto w-full max-w-2xl p-6 border border-gray-200 rounded-lg">
          <h2 className="text-2xl font-bold mb-6">Cadastrar Produto</h2>
          <p className="text-gray-600 mb-2 text-center">
            Faça login para continuar
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <div className="card mx-auto w-full max-w-2xl p-6 border border-gray-200 rounded-lg">
        <h2 className="text-2xl font-bold mb-6">Cadastrar Produto</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="form-group">
            <label htmlFor="titulo" className="block text-lg font-medium mb-2">
              Título do Produto
            </label>
            <input
              type="text"
              id="titulo"
              name="titulo"
              value={produto.titulo}
              onChange={handleInputChange}
              className="w-full p-1 border rounded-md"
              placeholder="Título do Produto"
              required
            />
          </div>

          <div className="form-group">
            <label
              htmlFor="descricao"
              className="block text-lg font-medium mb-2"
            >
              Descrição
            </label>
            <textarea
              id="descricao"
              name="descricao"
              value={produto.descricao}
              onChange={handleInputChange}
              className="w-full p-1 border rounded-md"
              placeholder="Descrição do Produto"
              required
            ></textarea>
          </div>

          <div className="form-group">
            <label htmlFor="valor" className="block text-lg font-medium mb-2">
              Valor
            </label>
            <input
              type="number"
              id="valor"
              name="valor"
              value={produto.valor}
              onChange={handleInputChange}
              className="w-full p-1 border rounded-md"
              placeholder="Valor do Produto"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="site" className="block text-lg font-medium mb-2">
              Link da Promoção
            </label>
            <input
              type="url"
              id="site"
              name="site"
              value={produto.site}
              onChange={handleInputChange}
              className="w-full p-1 border rounded-md"
              placeholder="Link da Promoção"
              required
            />
          </div>

          {/* Dropdown de Tipos */}
          <div className="form-group">
            <label htmlFor="tipo" className="block text-lg font-medium mb-2">
              Tipo
            </label>
            <select
              id="tipo"
              name="tipo"
              value={produto.tipoId}
              onChange={handleTipoChange}
              className="w-full p-1 border rounded-md"
              required
            >
              <option value="">Selecione um Tipo</option>
              {loading ? (
                <option>Carregando...</option>
              ) : (
                tipos.map((tipo) => (
                  <option key={tipo.id} value={tipo.id}>
                    {tipo.nome}
                  </option>
                ))
              )}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="fotos" className="block text-lg font-medium mb-2">
              Fotos do Produto
            </label>
            <input
              type="file"
              id="fotos"
              name="fotos"
              accept="image/*"
              onChange={handleFileChange}
              className="w-full text-sm"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800"
          >
            Cadastrar Produto
          </button>
        </form>
      </div>
    </div>
  );
}

export default Cadastrar;
