import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { GlobalContextProvider } from "./GlobalContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <GlobalContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </GlobalContextProvider>
);
