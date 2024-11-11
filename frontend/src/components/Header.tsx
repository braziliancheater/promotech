import {
  LucideComputer,
  LucideHome,
  LucidePlus,
  LucideSearch,
  LucideShoppingCart,
  Search,
} from "lucide-react";
import Logo from "../assets/images/logo.png";
import Dropdown from "./Dropdown";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Header() {
  const [dadosPesquisa, setDadosPesquisa] = useState("");
  const navigate = useNavigate();

  function enviarPesquisa(e: React.FormEvent) {
    e.preventDefault();

    if (dadosPesquisa === "") {
      return;
    }

    const queryParams = new URLSearchParams();
    queryParams.set("nome", dadosPesquisa);

    navigate(`/produtos/buscar?${queryParams.toString()}`);
  }

  return (
    <header className="bg-white border-b border-neutral-200 shadow-sm">
      <nav
        className="mx-auto flex items-center justify-between p-4 lg:px-8"
        aria-label="Global"
      >
        <div className="lg:flex-1 grid grid-cols-2 gap-4">
          <div className="flex items-center gap-4 col-span-2">
            <a href="/" className="-m-1.5 p-1.5 mr-6 flex items-center">
              <img src={Logo} alt="Logo Promotech" className="h-12 w-18" />
              <p className="text-lg font-semibold pl-3">PromoTech</p>
            </a>

            <form
              onSubmit={(e) => enviarPesquisa(e)}
              className="flex w-full lg:w-auto mb-4 lg:mb-0"
            >
              <div className="relative flex-grow">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <Search className="h-4 w-4 text-gray-500" />
                </div>
                <input
                  type="search"
                  placeholder="Pesquisar produtos..."
                  className="block min-w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-xl bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                  value={dadosPesquisa}
                  onChange={(e) => setDadosPesquisa(e.target.value)}
                />
              </div>
              <button
                type="submit"
                className="p-2 rounded-xl ml-2 bg-black text-white flex items-center justify-center"
              >
                <LucideSearch className="h-4 w-4 mr-1" />
                Buscar
              </button>
            </form>

            <div className="hidden md:flex-1 md:flex lg:flex lg:flex-1 md:justify-end lg:justify-end gap-4">
              <a
                href="/produtos/novo"
                className="flex gap-2 font-semibold leading-6 p-2 rounded-lg hover:text-neutral-700 transition"
              >
                <LucidePlus />
                Novo Produto
              </a>
              <Dropdown />
            </div>
          </div>

          <div className="flex gap-4 lg:gap-x-12 items-center justify-left">
            <a
              href="/"
              className="flex gap-2 font-semibold leading-6 text-gray-900 hover:text-gray-600"
            >
              <LucideHome />
              Incio
            </a>
            <a
              href="/categorias"
              className="flex gap-2 font-semibold leading-6 text-gray-900 hover:text-gray-600"
            >
              <LucideShoppingCart />
              Categorias
            </a>
            <a
              href="/monteseupc"
              className="flex gap-2 font-semibold leading-6 text-gray-900 hover:text-gray-600"
            >
              <LucideComputer />
              Monte seu PC
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
