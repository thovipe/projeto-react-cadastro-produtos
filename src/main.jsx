import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Router from './Routes.jsx'
import { ProdutosProvider } from "./components/ProductProvider";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProdutosProvider>
    <Router />
    </ProdutosProvider>
  </StrictMode>,
)
