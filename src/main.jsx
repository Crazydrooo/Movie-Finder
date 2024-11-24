import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ReducerMovi from "./components/Store/ReducerMovi.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ReducerMovi>
      <App />
    </ReducerMovi>
  </StrictMode>
);
