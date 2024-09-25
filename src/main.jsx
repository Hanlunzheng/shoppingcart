import App from "./App.jsx";
import ShoppingCartProvider from "./context/index.jsx";
import "./index.css";
import { createRoot } from "react-dom/client"; // Ensure this is imported correctly

import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ShoppingCartProvider>
      <App />
    </ShoppingCartProvider>
  </BrowserRouter>
);
