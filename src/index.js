import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { RecipesContextProvider } from "./store/recipes-context";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <RecipesContextProvider>
      <App />
    </RecipesContextProvider>
  </React.StrictMode>
);
