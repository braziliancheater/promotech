import Header from "../components/Header";
import "./MonteSeuPC.css";
import { useState } from "react";

function MonteSeuPC() {

  /* Placa de Video */
  const [placaVideo, setPlacaVideo] = useState(localStorage.getItem("placa_video"));
  const atualizarPlacaVideo = () => {
    const novoValor = localStorage.getItem("placa_video");
    if (novoValor !== placaVideo) {
      setPlacaVideo(novoValor);
    }
  };

  if (typeof window !== "undefined") {
    setInterval(atualizarPlacaVideo, 1000);
  }

  /* Processadores */
  const [Processadores, setProcessadores] = useState(localStorage.getItem("processadores"));
  const atualizarProcessadores = () => {
    const novoValor = localStorage.getItem("processadores");
    if (novoValor !== Processadores) {
      setProcessadores(novoValor);
    }
  };

  if (typeof window !== "undefined") {
    setInterval(atualizarProcessadores, 1000);
  }

  /* Placa Mãe  */
  const [placaMae, setPlacaMae] = useState(localStorage.getItem("placa_mae"));
  const atualizarPlacaMae = () => {
    const novoValor = localStorage.getItem("placa_mae");
    if (novoValor !== placaMae) {
      setPlacaMae(novoValor);
    }
  };

  if (typeof window !== "undefined") {
    setInterval(atualizarPlacaMae, 1000);
  }

  /* Momoria Ram  */
  const [memoriaRam, setMemoriaRam] = useState(localStorage.getItem("memoria_ram"));
  const atualizarMemoriaRam = () => {
    const novoValor = localStorage.getItem("memoria_ram");
    if (novoValor !== memoriaRam) {
      setMemoriaRam(novoValor);
    }
  };

  if (typeof window !== "undefined") {
    setInterval(atualizarMemoriaRam, 1000);
  }

  /* Armazenamento  */
  const [Armazenamento, setArmazenamento] = useState(localStorage.getItem("armazenamento"));
  const atualizarArmazenamento = () => {
    const novoValor = localStorage.getItem("armazenamento");
    if (novoValor !== Armazenamento) {
      setArmazenamento(novoValor);
    }
  };

  if (typeof window !== "undefined") {
    setInterval(atualizarArmazenamento, 1000);
  }

  /* Cooler */
  const [Cooler, setCooler] = useState(localStorage.getItem("cooler"));
  const atualizarCooler = () => {
    const novoValor = localStorage.getItem("cooler");
    if (novoValor !== Cooler) {
      setCooler(novoValor);
    }
  };

  if (typeof window !== "undefined") {
    setInterval(atualizarCooler, 1000);
  }
  
  return (
    <div className="main">
      <main className="main_MonteSeuPC">
        <div className="menu">
          <ul>
            <li><a href="#" className="parts" onClick={(event) => {event.preventDefault();
              const iframe = document.getElementById("screens"); iframe.src = "/processadores";}}>Processadores</a>
              <p style={{color: 'yellow'}} id="Processadores">{Processadores}</p>
            </li>
            
            <div style={{width: '100%', height: '1px', backgroundColor: 'black', marginTop:'4px', marginBottom: '4px'}} />

            <li><a href="#" className="parts"onClick={(event) => {event.preventDefault(); 
              const iframe = document.getElementById("screens"); iframe.src = "/placamae";}}>Placa Mãe</a>
              <p style={{color: 'yellow'}} id="placaMae">{placaMae}</p>
            </li>

            <div style={{width: '100%', height: '1px', backgroundColor: 'black', marginTop:'4px', marginBottom: '4px'}} />

            <li><a href="#" className="parts"onClick={(event) => {event.preventDefault(); 
              const iframe = document.getElementById("screens"); iframe.src = "/memoriaram";}}>Memória RAM</a>
              <p style={{color: 'yellow'}} id="memoriaRam">{memoriaRam}</p>
            </li>

            <div style={{width: '100%', height: '1px', backgroundColor: 'black', marginTop:'4px', marginBottom: '4px'}} />
              
            <li><a href="#" className="parts"onClick={(event) => {event.preventDefault(); 
              const iframe = document.getElementById("screens"); iframe.src = "/armazenamento";}}>Armazenamento</a>
              <p style={{color: 'yellow'}} id="Armazenamento">{Armazenamento}</p>
            </li>

            <div style={{width: '100%', height: '1px', backgroundColor: 'black', marginTop:'4px', marginBottom: '4px'}} />
              
            <li><a href="#" className="parts"onClick={(event) => {event.preventDefault(); 
              const iframe = document.getElementById("screens"); iframe.src = "/cooler";}}>Cooler</a>
              <p style={{color: 'yellow'}} id="Cooler">{Cooler}</p>
            </li>

            <div style={{width: '100%', height: '1px', backgroundColor: 'black', marginTop:'4px', marginBottom: '4px'}} />

            <li><a href="#" className="parts"onClick={(event) => {event.preventDefault(); 
              const iframe = document.getElementById("screens"); iframe.src = "/placavideo";}}>Placa de Video</a>
              <p style={{color: 'yellow'}} id="placaVideo">{placaVideo}</p>
            </li>

            <div style={{width: '100%', height: '1px', backgroundColor: 'black', marginTop:'4px', marginBottom: '4px'}} />

            <li><a href="#" className="parts"onClick={(event) => {event.preventDefault(); 
              const iframe = document.getElementById("screens"); iframe.src = "/fonte";}}>FONTE</a></li>
          </ul>
        </div>
        <iframe className="screens" id="screens" title="Monte seu PC"
          /*style={{ width: "100%", height: "600px", border: "none" }}*/
        ></iframe>
      </main>
    </div>
  );
}

export default MonteSeuPC;
