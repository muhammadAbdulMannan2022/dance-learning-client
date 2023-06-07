import { Outlet } from "react-router-dom";
import Navbar from "../pages/shared/Navbar";

const HomeLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default HomeLayout;
