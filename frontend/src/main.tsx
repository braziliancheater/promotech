import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import MonteSeuPC from './pages/MonteSeuPC.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/monteseupc",
    element: <MonteSeuPC />,
  },
]);

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
)
