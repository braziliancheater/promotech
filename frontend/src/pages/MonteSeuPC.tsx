import Header from "../components/Header"
import './MonteSeuPC.css';

function MonteSeuPC() {

    function loadPage(page: string): void {
        fetch(page)
            .then(response => {
                if (!response.ok) {
                    throw new Error('ERRO AO CARREGAR PÁGINA');
                }   
                return response.text();
            })
            .then(data => {
                const tela = document.getElementById('screens') as HTMLElement | null;
                if(tela){
                    tela.innerHTML = data;
                } else {
                    console.error("Elemento com o ID 'screens' não encontrado");
                }
            })
            .catch(error => {
                const tela = document.getElementById('screens') as HTMLElement | null;
                if(tela){
                    tela.innerHTML = `<h1>Erro</h1><p>${error.message}</p>`;
                } else {
                    console.error("Elemento com o ID 'screens' não encontrado");
                }
            });
    }
    (window as any).loadPage = loadPage;

    return (
        <div>
            <div>
                <Header />
            </div>

            <main className="grid grid-cols-4 gap-4 p-6 ">
                <div className="menu">
                    <ul>
                    <li><a href="#" className="parts" onClick={(event) => {event.preventDefault(); loadPage('/processadores');}}>PROCESSADORES</a></li>
                        <li><a href="#" className="parts" data-page="#" >teste</a></li>
                        <li className="parts">teste1</li>
                        <li className="parts"></li>
                        <li className="parts"></li>
                    </ul>
                </div>
                <div className="screens" id="screens">Monte seu PC</div>
            </main>
        </div>
    )
}

export default MonteSeuPC
