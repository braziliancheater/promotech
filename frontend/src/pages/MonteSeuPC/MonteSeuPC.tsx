import { useState, useEffect } from "react";

function MonteSeuPC() {
  const [components, setComponents] = useState({
    processadores: { titulo: "", preco: 0, site: "" },
    placaMae: { titulo: "", preco: 0, site: "" },
    placaVideo: { titulo: "", preco: 0, site: "" },
    memoriaRam: { titulo: "", preco: 0, site: "" },
    armazenamento: { titulo: "", preco: 0, site: "" },
    cooler: { titulo: "", preco: 0, site: "" },
    fonte: { titulo: "", preco: 0, site: "" },
  });

  const updateComponent = (key: string) => {
    const novoValor = localStorage.getItem(key);
    if (novoValor) {
      try {
        const parsedData = JSON.parse(novoValor);
        const titulo = parsedData[0]?.titulo || "Nome não disponível";
        const preco = parsedData[0]?.preco || 0;
        const site = parsedData[0]?.site || "";
        setComponents((prev) => ({
          ...prev,
          [key]: { titulo, preco, site },
        }));
      } catch (error) {
        console.error(`Error parsing JSON for ${key}:`, error);
        setComponents((prev) => ({
          ...prev,
          [key]: { titulo: "Erro ao carregar nome", preco: 0, site: "" },
        }));
      }
    }
  };

  useEffect(() => {
    const intervalIds = Object.keys(components).map((key) =>
      setInterval(() => updateComponent(key), 1000)
    );

    return () => {
      intervalIds.forEach(clearInterval);
    };
  }, [components]);

  const handleLinkClick = (event: React.MouseEvent, src: string) => {
    event.preventDefault();
    const iframe = document.getElementById("screens") as HTMLIFrameElement;
    iframe.src = src;
  };

  const totalPrice = Object.values(components).reduce((total, component) => {
    return total + (parseFloat(component.preco) || 0);
  }, 0);

  const formattedTotalPrice = totalPrice.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  // limpar o localStorage
  const limparLocalStorage = () => {
    localStorage.clear();
    // Atualizar a tela
    window.location.reload();
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <main className="flex-grow p-8">
        <div className="max-w-screen-lg mx-auto flex">
          <div className="w-1/3 bg-white p-4 shadow-lg rounded-md">
            <ul>
              {Object.keys(components).map((key) => (
                <li key={key} className="mb-4">
                  <a
                    href="#"
                    className="block text-lg font-semibold text-black capitalize"
                    onClick={(event) => handleLinkClick(event, `/${key}`)}
                  >
                    {key.replace(/([A-Z])/g, " $1").toUpperCase()}
                  </a>
                  <p className="text-blue-600">{components[key].titulo}</p>
                  <div className="my-2 border-t border-gray-300" />
                </li>
              ))}
            </ul>
            <button
              onClick={limparLocalStorage}
              className="mt-4 bg-black text-white py-2 px-4 rounded-lg w-full"
            >
              Limpar
            </button>
          </div>

          <div className="flex-grow ml-8">
            <iframe
              className="w-full h-[600px] rounded-md"
              id="screens"
              title="Monte seu PC"
            />
          </div>
        </div>

        <div className="max-w-screen-lg mx-auto mt-8 p-4 bg-white shadow-lg rounded-md">
          <h2 className="text-2xl font-bold text-center text-black mb-4">
            Resumo do seu PC
          </h2>
          <table className="w-full table-auto border-collapse">
            <thead>
              <tr>
                <th className="py-2 px-4 text-left font-semibold text-gray-700 border-b">
                  Componente
                </th>
                <th className="py-2 px-4 text-left font-semibold text-gray-700 border-b">
                  Nome
                </th>
                <th className="py-2 px-4 text-left font-semibold text-gray-700 border-b">
                  Preço (R$)
                </th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(components).map((key) => (
                <tr key={key}>
                  <td className="py-2 px-4 border-b">
                    {key.replace(/([A-Z])/g, " $1").toUpperCase()}
                  </td>
                  <td className="py-2 px-4 border-b underline text-blue-600">
                    <a href={components[key].site}>{components[key].titulo}</a>
                  </td>
                  <td className="py-2 px-4 border-b">
                    {/* Format individual prices */}
                    {parseFloat(components[key].preco).toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </td>
                </tr>
              ))}
              <tr>
                <td
                  colSpan={2}
                  className="py-2 px-4 text-right font-semibold text-lg"
                >
                  Total
                </td>
                <td className="py-2 px-4 text-lg font-semibold">
                  {formattedTotalPrice}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}

export default MonteSeuPC;
