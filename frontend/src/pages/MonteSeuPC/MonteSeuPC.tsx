import { useState, useEffect } from "react";

function MonteSeuPC() {
  // Define an object to hold the state of all parts
  const [components, setComponents] = useState({
    processadores: { titulo: "", preco: 0 },
    placaMae: { titulo: "", preco: 0 },
    placaVideo: { titulo: "", preco: 0 },
    memoriaRam: { titulo: "", preco: 0 },
    armazenamento: { titulo: "", preco: 0 },
    cooler: { titulo: "", preco: 0 },
    fonte: { titulo: "", preco: 0 },
  });

  // Function to fetch and parse JSON data from localStorage
  const updateComponent = (key: string) => {
    const novoValor = localStorage.getItem(key);
    if (novoValor) {
      try {
        const parsedData = JSON.parse(novoValor);
        const titulo = parsedData[0]?.titulo || "Nome não disponível"; // Extract the "titulo" field
        const preco = parsedData[0]?.preco || 0; // Extract the "preco" field
        setComponents((prev) => ({
          ...prev,
          [key]: { titulo, preco },
        }));
      } catch (error) {
        console.error(`Error parsing JSON for ${key}:`, error);
        setComponents((prev) => ({
          ...prev,
          [key]: { titulo: "Erro ao carregar nome", preco: 0 },
        }));
      }
    }
  };

  // Use timer function to keep checking for updates from localStorage
  useEffect(() => {
    // Timer that updates each component state every second
    const intervalIds = Object.keys(components).map((key) =>
      setInterval(() => updateComponent(key), 1000)
    );

    return () => {
      // Clear the intervals when the component unmounts
      intervalIds.forEach(clearInterval);
    };
  }, [components]);

  // Handle navigation to parts page
  const handleLinkClick = (event: React.MouseEvent, src: string) => {
    event.preventDefault();
    const iframe = document.getElementById("screens") as HTMLIFrameElement;
    iframe.src = src;
  };

  // Calculate total price
  const totalPrice = Object.values(components).reduce((total, component) => {
    return total + (component.preco || 0);
  }, 0);

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <main className="flex-grow p-8">
        <div className="max-w-screen-lg mx-auto flex">
          {/* Menu */}
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
          <h2 className="text-2xl font-bold text-center text-blue-800 mb-4">
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
                  <td className="py-2 px-4 border-b">
                    {components[key].titulo}
                  </td>
                  <td className="py-2 px-4 border-b">
                    {components[key].preco}
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
                  {totalPrice}
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
