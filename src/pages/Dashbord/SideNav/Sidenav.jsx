import React from "react";
import { FaChalkboardTeacher, FaUsers } from "react-icons/fa";
import { Link } from "react-router-dom";

const Sidenav = () => {
  const adminLinks = [
    {
      name: "manage classes",
      path: "/dashboard/manageclasses",
      icon: FaChalkboardTeacher,
    },
    {
      name: "Manage users",
      path: "/dashboard/users",
      icon: FaUsers,
    },
  ];
  const isAdmin = true;
  return (
    <div className="bg-white shadow-md md:w-1/4 px-4 pt-5 flex flex-col gap-2">
      {isAdmin &&
        adminLinks.map((adLink) => (
          <Link key={adLink.path} to={adLink.path}>
            <div className="bg-slate-200 flex items-center justify-between px-3 py-3 rounded hover:bg-slate-400">
              <p className="hidden md:block">{adLink.name}</p>
              <div>{React.createElement(adLink?.icon, { size: "20" })}</div>
            </div>
          </Link>
        ))}
    </div>
  );
};

export default Sidenav;
