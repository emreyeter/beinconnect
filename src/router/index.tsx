import { createBrowserRouter } from "react-router-dom";
import Detail from "../pages/detail/Detail";
import Home from "../pages/home/Home";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/movie-info",
      element: <Detail />,
    }
  ]);

export default router