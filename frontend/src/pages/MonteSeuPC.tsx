import Header from "../components/Header";
import "./MonteSeuPC.css";

function MonteSeuPC() {
  return (
    <div className="main">
      <main className="main_MonteSeuPC">
        <div className="menu">
          <ul>
            <li><a href="#" className="parts" onClick={(event) => {event.preventDefault();
              const iframe = document.getElementById("screens"); iframe.src = "/processadores";}}>PROCESSADORES</a>
            </li>
            
            <div style={{width: '100%', height: '1.5px', backgroundColor: 'black', marginTop:'4px', marginBottom: '4px'}} />

            <li><a href="#" className="parts"onClick={(event) => {event.preventDefault(); 
              const iframe = document.getElementById("screens"); iframe.src = "/placamae";}}>PLACA MÃE</a></li>

            <div style={{width: '100%', height: '1.5px', backgroundColor: 'black', marginTop:'4px', marginBottom: '4px'}} />

            <li><a href="#" className="parts"onClick={(event) => {event.preventDefault(); 
              const iframe = document.getElementById("screens"); iframe.src = "/memoriaram";}}>MEMÓRIA RAM</a></li>

            <div style={{width: '100%', height: '1.5px', backgroundColor: 'black', marginTop:'4px', marginBottom: '4px'}} />
              
            <li><a href="#" className="parts"onClick={(event) => {event.preventDefault(); 
              const iframe = document.getElementById("screens"); iframe.src = "/armazenamento";}}>ARMAZENAMENTO</a></li>

            <div style={{width: '100%', height: '1.5px', backgroundColor: 'black', marginTop:'4px', marginBottom: '4px'}} />
              
            <li><a href="#" className="parts"onClick={(event) => {event.preventDefault(); 
              const iframe = document.getElementById("screens"); iframe.src = "/cooler";}}>COOLER</a></li>

            <div style={{width: '100%', height: '1.5px', backgroundColor: 'black', marginTop:'4px', marginBottom: '4px'}} />

            <li><a href="#" className="parts"onClick={(event) => {event.preventDefault(); 
              const iframe = document.getElementById("screens"); iframe.src = "/placavideo";}}>PLACA DE VIDEO</a>
              <p className="text-white">{localStorage.getItem("placa_video")}</p>
            </li>

            <div style={{width: '100%', height: '1.5px', backgroundColor: 'black', marginTop:'4px', marginBottom: '4px'}} />

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
