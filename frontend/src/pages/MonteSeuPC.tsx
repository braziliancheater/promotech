import Header from "../components/Header"

function MonteSeuPC() {

    return (
        <div>
            <div>
                <Header />
            </div>

            <main className="grid grid-cols-4 gap-4 p-6 ">
                <div className="menu">
                    <ul>
                    <li><a href="#" className="parts" data-page="/processadores">PROCESSADORES</a></li>
                        <li className="parts"></li>
                        <li className="parts"></li>
                        <li className="parts"></li>
                        <li className="parts"></li>
                    </ul>
                </div>
                <div className="screens" id="screens">Monte seu PC</div>
            </main>
        </div>
    )
}

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

document.addEventListener('DOMContentLoaded', () => {
    const menuItems = document.querySelectorAll('.parts');

    menuItems.forEach(item => {
        item.addEventListener('click', (event) => {
            event.preventDefault(); 
            const page = (event.currentTarget as HTMLElement).getAttribute('data-page');
            if (page) {
                loadPage(page);
            }
        });
    });
});

(window as any).loadPage = loadPage;
export default MonteSeuPC
