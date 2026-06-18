import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router"
import './global.css'
import { AppRoutes } from "./routes/AppRoutes"
import { ToastContainer } from "react-toastify";


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <AppRoutes />
    <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        theme="dark"
      />
    </BrowserRouter>
  </StrictMode>,
)
