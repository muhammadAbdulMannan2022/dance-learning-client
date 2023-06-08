import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";

import Home from "../pages/Home/Home/Home";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);
export default router;
