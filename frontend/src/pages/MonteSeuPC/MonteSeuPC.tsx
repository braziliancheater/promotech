import "./MonteSeuPC.css";
import { useState, useEffect } from "react";

function MonteSeuPC() {
  /* Placa de Video */
  const [placaVideo, setPlacaVideo] = useState(
    localStorage.getItem("placa_video")
  );
  const atualizarPlacaVideo = () => {
    const novoValor = localStorage.getItem("placa_video");
    if (novoValor !== placaVideo) {
      setPlacaVideo(novoValor);
    }
  };

  /* Processadores */
  const [Processadores, setProcessadores] = useState(
    localStorage.getItem("processadores")
  );
  const atualizarProcessadores = () => {
    const novoValor = localStorage.getItem("processadores");
    if (novoValor !== Processadores) {
      setProcessadores(novoValor);
    }
  };

  /* Placa Mãe  */
  const [placaMae, setPlacaMae] = useState(localStorage.getItem("placa_mae"));
  const atualizarPlacaMae = () => {
    const novoValor = localStorage.getItem("placa_mae");
    if (novoValor !== placaMae) {
      setPlacaMae(novoValor);
    }
  };

  /* Memoria RAM  */
  const [memoriaRam, setMemoriaRam] = useState(
    localStorage.getItem("memoria_ram")
  );
  const atualizarMemoriaRam = () => {
    const novoValor = localStorage.getItem("memoria_ram");
    if (novoValor !== memoriaRam) {
      setMemoriaRam(novoValor);
    }
  };

  /* Armazenamento  */
  const [Armazenamento, setArmazenamento] = useState(
    localStorage.getItem("armazenamento")
  );
  const atualizarArmazenamento = () => {
    const novoValor = localStorage.getItem("armazenamento");
    if (novoValor !== Armazenamento) {
      setArmazenamento(novoValor);
    }
  };

  /* Cooler */
  const [Cooler, setCooler] = useState(localStorage.getItem("cooler"));
  const atualizarCooler = () => {
    const novoValor = localStorage.getItem("cooler");
    if (novoValor !== Cooler) {
      setCooler(novoValor);
    }
  };

  useEffect(() => {
    const intervalIds = [
      setInterval(atualizarPlacaVideo, 1000),
      setInterval(atualizarProcessadores, 1000),
      setInterval(atualizarPlacaMae, 1000),
      setInterval(atualizarMemoriaRam, 1000),
      setInterval(atualizarArmazenamento, 1000),
      setInterval(atualizarCooler, 1000),
    ];

    return () => {
      intervalIds.forEach(clearInterval);
    };
  }, [placaVideo, Processadores, placaMae, memoriaRam, Armazenamento, Cooler]);

  const handleLinkClick = (event: React.MouseEvent, src: string) => {
    event.preventDefault();
    const iframe = document.getElementById("screens") as HTMLIFrameElement;
    iframe.src = src;
  };

  return (
    <div className="main">
      <main className="main_MonteSeuPC">
        <div className="menu">
          <ul>
            <li>
              <a
                href="#"
                className="parts"
                onClick={(event) => handleLinkClick(event, "/processadores")}
              >
                Processadores
              </a>
              <p style={{ color: "yellow" }} id="Processadores">
                {Processadores}
              </p>
            </li>

            <div
              style={{
                width: "100%",
                height: "1px",
                backgroundColor: "black",
                marginTop: "4px",
                marginBottom: "4px",
              }}
            />

            <li>
              <a
                href="#"
                className="parts"
                onClick={(event) => handleLinkClick(event, "/placamae")}
              >
                Placa Mãe
              </a>
              <p style={{ color: "yellow" }} id="placaMae">
                {placaMae}
              </p>
            </li>

            <div
              style={{
                width: "100%",
                height: "1px",
                backgroundColor: "black",
                marginTop: "4px",
                marginBottom: "4px",
              }}
            />

            <li>
              <a
                href="#"
                className="parts"
                onClick={(event) => handleLinkClick(event, "/memoriaram")}
              >
                Memória RAM
              </a>
              <p style={{ color: "yellow" }} id="memoriaRam">
                {memoriaRam}
              </p>
            </li>

            <div
              style={{
                width: "100%",
                height: "1px",
                backgroundColor: "black",
                marginTop: "4px",
                marginBottom: "4px",
              }}
            />

            <li>
              <a
                href="#"
                className="parts"
                onClick={(event) => handleLinkClick(event, "/armazenamento")}
              >
                Armazenamento
              </a>
              <p style={{ color: "yellow" }} id="Armazenamento">
                {Armazenamento}
              </p>
            </li>

            <div
              style={{
                width: "100%",
                height: "1px",
                backgroundColor: "black",
                marginTop: "4px",
                marginBottom: "4px",
              }}
            />

            <li>
              <a
                href="#"
                className="parts"
                onClick={(event) => handleLinkClick(event, "/cooler")}
              >
                Cooler
              </a>
              <p style={{ color: "yellow" }} id="Cooler">
                {Cooler}
              </p>
            </li>

            <div
              style={{
                width: "100%",
                height: "1px",
                backgroundColor: "black",
                marginTop: "4px",
                marginBottom: "4px",
              }}
            />

            <li>
              <a
                href="#"
                className="parts"
                onClick={(event) => handleLinkClick(event, "/placavideo")}
              >
                Placa de Video
              </a>
              <p style={{ color: "yellow" }} id="placaVideo">
                {placaVideo}
              </p>
            </li>

            <div
              style={{
                width: "100%",
                height: "1px",
                backgroundColor: "black",
                marginTop: "4px",
                marginBottom: "4px",
              }}
            />

            <li>
              <a
                href="#"
                className="parts"
                onClick={(event) => handleLinkClick(event, "/fonte")}
              >
                FONTE
              </a>
            </li>
          </ul>
        </div>
        <iframe className="screens" id="screens" title="Monte seu PC"></iframe>
      </main>
    </div>
  );
}

export default MonteSeuPC;
