import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ActiveTeamProvider } from "./context/active-team/active-team.provider";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { GoalPage } from "./pages/Goal/GoalPage.tsx";
import { Home } from "./pages/Home/Home.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/goal/:id",
        element: <GoalPage />,
      },
      {
        path: "/*",
        element: <Home />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ActiveTeamProvider>
      <RouterProvider router={router} />
    </ActiveTeamProvider>
  </React.StrictMode>
);
