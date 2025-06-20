import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import StoreContextProvider from "./context/StoreContext.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

createRoot(document.getElementById("root")).render(
   <StrictMode>
      <BrowserRouter>
         <StoreContextProvider>
            <App />
            <ToastContainer position="top-center" autoClose={3000} />
         </StoreContextProvider>
      </BrowserRouter>
   </StrictMode>
);
