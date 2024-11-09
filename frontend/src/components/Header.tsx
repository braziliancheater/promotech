import {
  ArrowRight,
  LucideComputer,
  LucideHome,
  LucidePlus,
  LucideShoppingCart,
} from "lucide-react";
import Logo from "../assets/images/logo.png";
import Dropdown from "./Dropdown";

function Header() {
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

            <form>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="pesquisa"
                  id="pesquisa"
                  className="block min-w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-xl bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Pesquisar"
                  required
                />
              </div>
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
              href="/"
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
