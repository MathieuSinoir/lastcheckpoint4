import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import axios from "axios";

import App from "./App";
import Home from "./pages/Home";
import Team from "./pages/Team";

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
        element: <Team />,
        loader: () =>
          axios
            .get(`${import.meta.env.VITE_BACKEND_URL}/api/team`)
            .then((response) => response.data),
      },
    ],
  },
]);

export default App;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
