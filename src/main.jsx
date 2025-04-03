import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from "react-router-dom";
import {CartProvider} from "./CartContext.jsx";
import 'primereact/resources/themes/lara-light-indigo/theme.css';  // Or your desired theme
import 'primereact/resources/primereact.min.css';                   // Core PrimeReact styles
import 'primeicons/primeicons.css';
import './i18n'
createRoot(document.getElementById('root')).render(
  <StrictMode>
      <BrowserRouter>
          <CartProvider>
              <App />
          </CartProvider>
      </BrowserRouter>
  </StrictMode>
)
