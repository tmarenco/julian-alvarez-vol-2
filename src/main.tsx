import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ActiveTeamProvider } from "./context/active-team/active-team.provider";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ActiveTeamProvider>
      <App />
    </ActiveTeamProvider>
  </React.StrictMode>
);
