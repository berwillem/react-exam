import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PopUp from "./pages/PopUp.jsx";
import Animation from "./pages/Animation.jsx";
import Counter from "./pages/Counter.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/animation",
    element: <Animation />,
  },
  {
    path: "/popup",
    element: <PopUp />,
  },
  {
    path: "/counter",
    element: <Counter />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
