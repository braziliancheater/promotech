import { useEffect, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ChevronDown,
  LogOut,
  UserCircle,
} from "lucide-react";
import Perfil from "../assets/images/perfil.png";

function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("access_token");

    if (token) {
      fetch("http://localhost:5000/usuario/me", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => response.json())
        .then((data) => setUser(data))
        .catch((error) => {
          console.error("Erro ao carregar os dados do usuário:", error);
        });
    } else {
      localStorage.removeItem("access_token");
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("access_token");
    window.location.href = "/";
  };

  const handleLogin = () => {
    window.location.href = "/login";
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        {user ? (
          <button
            type="button"
            className="inline-flex w-full justify-center items-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
            id="user-menu-button"
            aria-expanded={isOpen}
            aria-haspopup="true"
            onClick={() => setIsOpen(!isOpen)}
          >
            <img className="h-8 w-8 rounded-full" src={Perfil} />
            <span className="hidden sm:inline">{user["nome"]}</span>
            <ChevronDown
              className="-mr-1 h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
          </button>
        ) : (
          <button
            onClick={handleLogin}
            className="inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 bg-white border rounded-md shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          >
            Entrar
            <ArrowRight
              className="ml-1 h-5 w-5 text-black"
              aria-hidden="true"
            />
          </button>
        )}
      </div>

      {isOpen && user && (
        <div
          className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="user-menu-button"
          tabIndex={-1}
        >
          <div className="py-1" role="none">
            <button
              className="flex w-full items-center px-4 py-2 text-sm text-black hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
              tabIndex={-1}
              id="user-menu-item-0"
              onClick={handleLogout}
            >
              <UserCircle
                className="mr-3 h-5 w-5 text-black"
                aria-hidden="true"
              />
              Meu Perfil
            </button>
          </div>
          <div className="py-1" role="none">
            <button
              className="flex w-full items-center px-4 py-2 text-sm text-black hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
              tabIndex={-1}
              id="user-menu-item-0"
              onClick={handleLogout}
            >
              <LogOut className="mr-3 h-5 w-5 text-black" aria-hidden="true" />
              Logout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Dropdown;
