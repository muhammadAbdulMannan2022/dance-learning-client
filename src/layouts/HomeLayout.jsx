import { Outlet } from "react-router-dom";
import Navbar from "../pages/shared/Navbar";
import Footer from "../pages/shared/Footer";

const HomeLayout = () => {
  return (
    <div className="w-full overflow-hidden">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default HomeLayout;
