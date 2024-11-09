import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MonteSeuPC from "./pages/MonteSeuPC.tsx";
import ErrorBoundary from "./components/ErrorBoundary";
import NotFound from "./components/NotFound.tsx";
import DetalhesProduto from "./pages/DetalhesProduto.tsx";
import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";
import Login from "./pages/Login.tsx";
import Cadastrar from "./pages/Cadastrar.tsx";
import Sobre from "./pages/Sobre.tsx";
import Processadores from "./pages/Processadores.tsx";
import PlacaMae from "./pages/PlacaMae.tsx";
import MemoriaRam from "./pages/MonteSeuPC/MemoriaRam.tsx";
import Armazenamento from "./pages/MonteSeuPC/Armazenamento.tsx";
import Cooler from "./pages/MonteSeuPC/Cooler.tsx";
import PlacaVideo from "./pages/PlacaVideo.tsx";
import Fonte from "./pages/MonteSeuPC/Fonte.tsx";
import Registrar from "./pages/Registrar.tsx";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}
const Layout = ({ children }: LayoutProps) => (
  <ErrorBoundary>
    <Header />
    {children}
    <Footer />
  </ErrorBoundary>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <App />
      </Layout>
    ),
  },
  {
    path: "/Cadastrar",
    element: (
      <Layout>
        <Cadastrar />
      </Layout>
    ),
  },
  {
    path: "/monteseupc",
    element: (
      <Layout>
        <MonteSeuPC />
      </Layout>
    ),
  },
  {
    path: "/produto/detalhe",
    element: (
      <Layout>
        <DetalhesProduto />
      </Layout>
    ),
  },
  {
    path: "/sobre",
    element: <Sobre />,
  },
  {
    path: "/processadores",
    element: <Processadores />,
  },
  {
    path: "/placamae",
    element: <PlacaMae />,
  },
  {
    path: "/memoriaram",
    element: <MemoriaRam />,
  },
  {
    path: "/armazenamento",
    element: <Armazenamento />,
  },
  {
    path: "/cooler",
    element: <Cooler />,
  },
  {
    path: "/placavideo",
    element: <PlacaVideo />,
  },
  {
    path: "/fonte",
    element: <Fonte />,
  },
  {
    path: "/produtos/novo",
    element: (
      <Layout>
        <Cadastrar />
      </Layout>
    ),
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/registrar",
    element: <Registrar />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
