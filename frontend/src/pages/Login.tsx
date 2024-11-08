import React, { useState } from "react";
import { login_novo_usuario } from "../api/usuarios/api"; // Adjust this import path based on your project structure
import Logo from "../assets/images/logo.png";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setError(null);
    setLoading(true);

    const loginData = {
      email,
      senha: password,
    };

    try {
      const token = await login_novo_usuario(loginData);

      if (token) {
        localStorage.setItem("access_token", token);
        window.location.href = "/dashboard";
      }
    } catch (error) {
      setError("Credenciais inválidas ou erro ao fazer login.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col lg:flex-row">
      <div className="w-full lg:w-1/2 bg-black text-white hidden lg:flex flex-col items-center justify-center p-12 lg:p-24">
        <div className="w-full max-w-md space-y-8">
          <img
            src={Logo}
            alt="Logo"
            width={200}
            height={200}
            className="mx-auto rounded-lg"
            loading="lazy"
          />
          <h2 className="mt-6 text-center text-3xl font-extrabold">
            Bem-vindo ao PromoTech
          </h2>
          <p className="mt-2 text-center text-sm">Faça login para continuar</p>
        </div>
      </div>

      <div className="w-full lg:w-1/2 flex items-center justify-center p-12 lg:p-24">
        <div className="w-full max-w-md space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Entrar na sua conta
            </h2>
          </div>
          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            <div className="rounded-md shadow-sm space-y-4">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email
                </label>
                <input
                  id="email-address"
                  name="usuario"
                  type="text"
                  required
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-black focus:border-black focus:z-10 sm:text-sm"
                  placeholder="Seu email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Senha
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-black focus:border-black focus:z-10 sm:text-sm"
                  placeholder="Sua senha"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            {error && (
              <div className="text-red-500 text-center text-sm">{error}</div>
            )}

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-black focus:ring-black border-gray-300 rounded"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-900"
                >
                  Lembrar de mim
                </label>
              </div>
              <div className="text-sm">
                <a
                  href="#"
                  className="font-medium text-black hover:text-gray-800"
                >
                  Esqueceu sua senha?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
                disabled={loading}
              >
                {loading ? "Entrando..." : "Entrar"}{" "}
              </button>
            </div>

            <p className="text-center text-sm text-gray-700">
              Não possui uma conta?{" "}
              <a className="text-black" href="/registrar">
                Registre-se
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
