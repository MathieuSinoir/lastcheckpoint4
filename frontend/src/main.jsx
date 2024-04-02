import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import axios from "axios";

import App from "./App";
import Home from "./pages/Home";
import Teams from "./pages/Teams";
import NewPlayer from "./pages/NewPlayer";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/team",
        element: <Teams />,
        loader: () =>
          axios
            .get(`${import.meta.env.VITE_BACKEND_URL}/api/team`)
            .then((response) => response.data),
      },
      {
        path: "/newplayer",
        element: <NewPlayer />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
