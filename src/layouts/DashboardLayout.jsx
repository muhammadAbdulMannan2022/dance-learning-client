import { Outlet } from "react-router-dom";
import SideNav from "../pages/Dashbord/SideNav/Sidenav";

const DashboardLayout = () => {
  return (
    <>
      <section className="flex gap-6">
        <SideNav />
        <Outlet />
      </section>
    </>
  );
};

export default DashboardLayout;
