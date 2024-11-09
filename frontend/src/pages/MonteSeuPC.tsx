import { useState, useRef } from "react";

function MonteSeuPC() {
  const [placaVideo, setPlacaVideo] = useState(
    localStorage.getItem("placa_video")
  );
  const [Processadores, setProcessadores] = useState(
    localStorage.getItem("processadores")
  );

  const iframeRef = useRef<HTMLIFrameElement | null>(null);

  const atualizarPlacaVideo = () => {
    const novoValor = localStorage.getItem("placa_video");
    if (novoValor !== placaVideo) {
      setPlacaVideo(novoValor);
    }
  };

  const atualizarProcessadores = () => {
    const novoValor = localStorage.getItem("processadores");
    if (novoValor !== Processadores) {
      setProcessadores(novoValor);
    }
  };

  if (typeof window !== "undefined") {
    setInterval(atualizarPlacaVideo, 1000);
    setInterval(atualizarProcessadores, 1000);
  }

  return (
    <div className="main">
      <main className="main_MonteSeuPC">
        <div className="menu">
          <ul>
            <li>
              <a
                href="#"
                className="parts"
                onClick={(event) => {
                  event.preventDefault();
                  if (iframeRef.current) {
                    iframeRef.current.src = "/processadores";
                  }
                }}
              >
                PROCESSADORES
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
                onClick={(event) => {
                  event.preventDefault();
                  if (iframeRef.current) {
                    iframeRef.current.src = "/placamae";
                  }
                }}
              >
                PLACA MÃE
              </a>
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
                onClick={(event) => {
                  event.preventDefault();
                  if (iframeRef.current) {
                    iframeRef.current.src = "/memoriaram";
                  }
                }}
              >
                MEMÓRIA RAM
              </a>
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
                onClick={(event) => {
                  event.preventDefault();
                  if (iframeRef.current) {
                    iframeRef.current.src = "/armazenamento";
                  }
                }}
              >
                ARMAZENAMENTO
              </a>
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
                onClick={(event) => {
                  event.preventDefault();
                  if (iframeRef.current) {
                    iframeRef.current.src = "/cooler";
                  }
                }}
              >
                COOLER
              </a>
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
                onClick={(event) => {
                  event.preventDefault();
                  if (iframeRef.current) {
                    iframeRef.current.src = "/placavideo";
                  }
                }}
              >
                PLACA DE VIDEO
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
                onClick={(event) => {
                  event.preventDefault();
                  if (iframeRef.current) {
                    iframeRef.current.src = "/fonte";
                  }
                }}
              >
                FONTE
              </a>
            </li>
          </ul>
        </div>
        <iframe className="screens" ref={iframeRef} title="Monte seu PC" />
      </main>
    </div>
  );
}

export default MonteSeuPC;
