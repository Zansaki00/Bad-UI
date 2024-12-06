import { createBrowserRouter, Outlet } from "react-router";
import Chaos

from "./chaos/Chaos";
import App from "./App";
const Router = createBrowserRouter([
    {
      path: "/",
      element: <Outlet />,
      children: [
        {
          path: "/",
          element: <Chaos />,
        },
        {
          path: "/chaos",
          element: <Chaos />,
        },
        
      ],
    },
  ]);
  export default Router;
  