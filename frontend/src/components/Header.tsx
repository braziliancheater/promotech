import Logo from "../assets/logo.png";

function Header() {
  return (
    <header className="bg-white border-b border-neutral-200 shadow-sm">
      <nav
        className="mx-auto flex items-center justify-between p-4 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5 mr-6">
            <img src={Logo} alt="Logo Promotech" className="h-12 w-18" />
          </a>

          <div className="hidden lg:flex lg:gap-x-12 items-center justify-center">
            <a href="/" className="font-semibold leading-6 text-gray-900">
              Incio
            </a>
            <a
              href="/monteseupc"
              className="font-semibold leading-6 text-gray-900"
            >
              Monte seu PC
            </a>
            <a href="/sobre" className="font-semibold leading-6 text-gray-900">
              Sobre
            </a>
          </div>
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            Entrar <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Header;
