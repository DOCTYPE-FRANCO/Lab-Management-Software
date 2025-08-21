import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Maintenance from "./Maintenance.jsx"; // <-- import your component
import Personal from "./Personal.jsx";
import Schoolsys from "./Schoolsys.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/maintenance",
    element: <Maintenance />,
  },
  {
    path: "/personal",
    element: <Personal />,
  },

  {
    path: "/schoolsystem",
    element: <Schoolsys />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
