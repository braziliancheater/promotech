import { useEffect, useState } from "react";

function Cooler() {
    const [produtos, setProdutos] = useState([]);

    useEffect(() => {
      const fetchProdutos = async () => {
        try {
          const response = await fetch(
            "http://localhost:5000/produtos/listar" //"https://api.brazilian.lol/produtos/listar"
          );
          if (response.ok) {
            const data = await response.json();
            setProdutos(data.produtos);
          } else {
            console.error("Falha ao obter dados:", response.status);
          }
        } catch (error) {
          console.error("Erro ao obter dados:", error);
        }
      };
  
      fetchProdutos();
    }, []);

    const handleClick = (titulo: any) => {
        localStorage.setItem('cooler', titulo);
    };
    return (
        <div>
            <main className="grid grid-cols-4 gap-2">
            {produtos.map((produto) => (
                <div onClick={() => handleClick(produto["titulo"])}>
                    <a style={{background:'red'}}>
                    <img
                        alt=""
                        src={produto["imagem"]}
                        /*className="h-16 w-full object-cover"*/
                        style={{height: '200px'}}
                        loading="lazy"
                    />

                    <div style={{background: 'transparent', height: '50px', width: '100%'}}>
                        <span>
                            <h3 style={{color: 'white', fontSize: '18px'}}>
                                {produto["titulo"]}
                            </h3>
                        </span>

                        <h5 /*className="mt-2 line-clamp-3 text-xl text-black font-semibold"*/ style={{color: '#00a202', fontSize: '20px'}}>
                            {produto["preco"]}
                        </h5>
                    </div>
                    </a>
                </div>
                
                ))}
            </main>
        </div>
    )
}

export default Cooler