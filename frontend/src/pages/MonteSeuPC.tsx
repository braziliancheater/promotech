import Header from "../components/Header";
import "./MonteSeuPC.css";

function MonteSeuPC() {
  return (
    <div className="main">
      <main className="main_MonteSeuPC">
        <div className="menu">
          <ul>
            <li><a href="#" className="parts" onClick={(event) => {event.preventDefault();
              // Defina a URL do iframe para /processadores
              const iframe = document.getElementById("screens"); iframe.src = "/processadores";}}>PROCESSADORES</a></li>

            <li><a href="#" className="parts"onClick={(event) => {event.preventDefault(); 
              const iframe = document.getElementById("screens"); iframe.src = "/placamae";}}>PLACA MÃE</a></li>

            <li><a href="#" className="parts"onClick={(event) => {event.preventDefault(); 
              const iframe = document.getElementById("screens"); iframe.src = "/memoriaram";}}>MEMÓRIA RAM</a></li>
              
            <li><a href="#" className="parts"onClick={(event) => {event.preventDefault(); 
              const iframe = document.getElementById("screens"); iframe.src = "/armazenamento";}}>ARMAZENAMENTO</a></li>
              
            <li><a href="#" className="parts"onClick={(event) => {event.preventDefault(); 
              const iframe = document.getElementById("screens"); iframe.src = "/cooler";}}>COOLER</a></li>

        
          </ul>
        </div>
        <iframe
          id="screens" title="Processadores"
          /*style={{ width: "100%", height: "600px", border: "none" }}*/
        ></iframe>
      </main>
    </div>
  );
}

export default MonteSeuPC;
