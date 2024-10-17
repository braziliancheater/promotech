import {
  ArrowRight,
  LucideComputer,
  LucideDoorOpen,
  LucideHome,
  LucideInfo,
} from "lucide-react";
import Logo from "../assets/logo.png";

function Header() {
  return (
    <header className="bg-white border-b border-neutral-200 shadow-sm">
      <nav
        className="mx-auto flex items-center justify-between p-4 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5 mr-6">
            <img src={Logo} alt="Logo Promotech" className="h-12 w-18" />
          </a>

          <div className="flex gap-4 lg:gap-x-12 items-center justify-center">
            <a
              href="/"
              className="flex gap-2 font-semibold leading-6 text-gray-900 hover:text-gray-600"
            >
              <LucideHome />
              Incio
            </a>
            <a
              href="/monteseupc"
              className="flex gap-2 font-semibold leading-6 text-gray-900 hover:text-gray-600"
            >
              <LucideComputer />
              Monte seu PC
            </a>
            <a
              href="/sobre"
              className="flex gap-2 font-semibold leading-6 text-gray-900 hover:text-gray-600"
            >
              <LucideInfo />
              Sobre
            </a>
          </div>
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a
            href="/login"
            className="bg-black flex gap-2 font-semibold leading-6 p-2 rounded-lg text-white hover:bg-neutral-700 transition"
          >
            Entrar
            <ArrowRight />
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Header;
