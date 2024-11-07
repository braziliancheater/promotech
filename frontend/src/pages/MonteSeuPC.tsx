import Header from "../components/Header";
import "./MonteSeuPC.css";

function MonteSeuPC() {
  function loadPage(page: string): void {
    fetch(page)
      .then((response) => {
        if (!response.ok) {
          throw new Error("ERRO AO CARREGAR PÁGINA");
        }
        return response.text();
      })
      .then((data) => {
        console.log(data);
        const tela = document.getElementById("screens") as HTMLElement | null;
        if (tela) {
          tela.innerHTML = data;
        } else {
          console.error("Elemento com o ID 'screens' não encontrado");
        }
      })
      .catch((error) => {
        const tela = document.getElementById("screens") as HTMLElement | null;
        if (tela) {
          tela.innerHTML = `<h1>Erro</h1><p>${error.message}</p>`;
        } else {
          console.error("Elemento com o ID 'screens' não encontrado");
        }
      });
  }
  (window as any).loadPage = loadPage;

  return (
    <div>
      <main className="main_MonteSeuPC">
        <div className="menu">
          <ul>
            <li>
              <a
                href="#"
                className="parts"
                onClick={(event) => {
                  event.preventDefault();
                  // Defina a URL do iframe para /processadores
                  const iframe = document.getElementById(
                    "processadores-iframe"
                  );
                  iframe.src = "/processadores";
                }}
              >
                PROCESSADORES
              </a>
            </li>
            <li>
              <a href="#" className="parts" data-page="#">
                teste
              </a>
            </li>
            <li className="parts">teste1</li>
            <li className="parts"></li>
            <li className="parts"></li>
          </ul>
        </div>
        <div className="screens" id="screens">
          Monte seu PC
        </div>
        <iframe
          id="processadores-iframe"
          title="Processadores"
          style={{ width: "100%", height: "600px", border: "none" }}
        ></iframe>
      </main>
    </div>
  );
}

export default MonteSeuPC;
