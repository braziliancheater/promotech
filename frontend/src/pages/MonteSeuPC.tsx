import Header from "../components/Header";
import "./MonteSeuPC.css";
import { useState } from "react";

function MonteSeuPC() {
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
  
  return (
    <div className="main">
      <main className="main_MonteSeuPC">
        <div className="menu">
          <ul>
            <li><a href="#" className="parts" onClick={(event) => {event.preventDefault();
              const iframe = document.getElementById("screens"); iframe.src = "/processadores";}}>PROCESSADORES</a>
              <p style={{color: 'yellow'}} id="Processadores">{Processadores}</p>
            </li>
            
            <div style={{width: '100%', height: '1px', backgroundColor: 'black', marginTop:'4px', marginBottom: '4px'}} />

            <li><a href="#" className="parts"onClick={(event) => {event.preventDefault(); 
              const iframe = document.getElementById("screens"); iframe.src = "/placamae";}}>PLACA MÃE</a></li>

            <div style={{width: '100%', height: '1px', backgroundColor: 'black', marginTop:'4px', marginBottom: '4px'}} />

            <li><a href="#" className="parts"onClick={(event) => {event.preventDefault(); 
              const iframe = document.getElementById("screens"); iframe.src = "/memoriaram";}}>MEMÓRIA RAM</a></li>

            <div style={{width: '100%', height: '1px', backgroundColor: 'black', marginTop:'4px', marginBottom: '4px'}} />
              
            <li><a href="#" className="parts"onClick={(event) => {event.preventDefault(); 
              const iframe = document.getElementById("screens"); iframe.src = "/armazenamento";}}>ARMAZENAMENTO</a></li>

            <div style={{width: '100%', height: '1px', backgroundColor: 'black', marginTop:'4px', marginBottom: '4px'}} />
              
            <li><a href="#" className="parts"onClick={(event) => {event.preventDefault(); 
              const iframe = document.getElementById("screens"); iframe.src = "/cooler";}}>COOLER</a></li>

            <div style={{width: '100%', height: '1px', backgroundColor: 'black', marginTop:'4px', marginBottom: '4px'}} />

            <li><a href="#" className="parts"onClick={(event) => {event.preventDefault(); 
              const iframe = document.getElementById("screens"); iframe.src = "/placavideo";}}>PLACA DE VIDEO</a>
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
