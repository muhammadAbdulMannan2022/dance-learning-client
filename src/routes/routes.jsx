import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";

import Home from "../pages/Home/Home/Home";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import Classes from "../pages/classes/Classes";
import Dashboard from "../pages/Dashbord/Dashbord";
import DashboardLayout from "../layouts/DashboardLayout";
import AddAClass from "../pages/Dashbord/addAclass/AddAClass";
import ManageClass from "../pages/Dashbord/manageClass/ManageClass";
import EnrolledClass from "../pages/Dashbord/enrolledClass/EnrolledClass";
import Payment from "../pages/Dashbord/payment/Payment";
import Onlyuser from "../private/Onlyuser";
import Onlyinstructor from "../private/OnlyInstructor";
import Onlyadmin from "../private/OnlyAdmin";
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
        path: "/classes",
        element: <Classes />,
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
  {
    path: "/dashbord",
    element: (
      <Onlyuser>
        <DashboardLayout />
      </Onlyuser>
    ),
    children: [
      {
        path: "/dashbord/",
        element: <Dashboard />,
      },
      {
        path: "/dashbord/addClass",
        element: (
          <Onlyinstructor>
            <AddAClass />
          </Onlyinstructor>
        ),
      },
      {
        path: "/dashbord/manageclasses",
        element: (
          <Onlyadmin>
            <ManageClass />
          </Onlyadmin>
        ),
      },
      {
        path: "/dashbord/myenrolledclasses",
        element: <EnrolledClass />,
      },
      {
        path: "/dashbord/payment",
        element: <Payment />,
      },
    ],
  },
]);
export default router;
