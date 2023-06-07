import { Outlet } from "react-router-dom";
import Navbar from "../pages/shared/Navbar";

const HomeLayout = () => {
  return (
    <div className="w-full overflow-hidden">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default HomeLayout;
