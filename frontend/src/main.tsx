import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MonteSeuPC from "./pages/MonteSeuPC.tsx";
import ErrorBoundary from "./components/ErrorBoundary";
import NotFound from "./components/NotFound.tsx";
import Processadores from "./pages/Processadores.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    ),
  },
  {
    path: "/monteseupc",
    element: (
      <ErrorBoundary>
        <MonteSeuPC />
      </ErrorBoundary>
    ),
  },
  {
    path: "/processadores",
    element: (
      <ErrorBoundary>
        <Processadores />
      </ErrorBoundary>
    ),
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
