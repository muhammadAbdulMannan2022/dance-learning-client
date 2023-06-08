import { Outlet } from "react-router-dom";
import SideNav from "../pages/Dashbord/SideNav/Sidenav";

const DashboardLayout = () => {
  return (
    <>
      <section className="flex h-screen">
        <SideNav />
        <Outlet />
      </section>
    </>
  );
};

export default DashboardLayout;
