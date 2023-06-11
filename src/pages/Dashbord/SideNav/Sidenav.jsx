import React, { useContext, useEffect, useState } from "react";
import {
  FaChalkboardTeacher,
  FaHome,
  FaMoneyBill,
  FaPlus,
  FaUsers,
  FaWallet,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { HiBookmark } from "react-icons/hi";

const Sidenav = () => {
  const { user, loading } = useContext(AuthContext);
  const [rol, setRol] = useState("");
  useEffect(() => {
    if (!loading) {
      fetch(`https://hello-summer-server.vercel.app/role/?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setRol(data.rol);
        });
    }
  }, [loading]);
  const adminLinks = [
    {
      name: "manage classes",
      path: "/dashbord/manageclasses",
      icon: FaChalkboardTeacher,
    },
    {
      name: "Manage users",
      path: "/dashbord",
      icon: FaUsers,
    },
  ];
  const instructorsLinks = [
    {
      name: "Add a Class",
      path: "/dashbord/addClass",
      icon: FaPlus,
    },
    {
      name: "My Classes",
      path: "/dashbord",
      icon: FaMoneyBill,
    },
  ];
  const studentLinks = [
    {
      name: "My Selected Classes",
      path: "/dashbord",
      icon: FaChalkboardTeacher,
    },
    {
      name: "My Enrolled Classes",
      path: "/dashbord/myenrolledclasses",
      icon: HiBookmark,
    },
    {
      name: "payment",
      path: "/dashbord/payment",
      icon: FaWallet,
    },
  ];
  return (
    <div className="bg-white shadow-md md:w-1/4 px-4 pt-5 flex flex-col gap-2">
      <Link to="/">
        <div className="bg-slate-200 flex items-center justify-between px-3 py-3 rounded hover:bg-slate-400">
          <p className="hidden md:block">Home</p>
          <div>
            <FaHome className="h-6 w-6" />
          </div>
        </div>
      </Link>
      {rol === "admin" &&
        adminLinks.map((adLink) => (
          <Link key={adLink.path} to={adLink.path}>
            <div className="bg-slate-200 flex items-center justify-between px-3 py-3 rounded hover:bg-slate-400">
              <p className="hidden md:block">{adLink.name}</p>
              <div>{React.createElement(adLink?.icon, { size: "20" })}</div>
            </div>
          </Link>
        ))}
      {rol === "student" &&
        studentLinks.map((adLink) => (
          <Link key={adLink.path} to={adLink.path}>
            <div className="bg-slate-200 flex items-center justify-between px-3 py-3 rounded hover:bg-slate-400">
              <p className="hidden md:block">{adLink.name}</p>
              <div>{React.createElement(adLink?.icon, { size: "30" })}</div>
            </div>
          </Link>
        ))}
      {rol === "instructor" &&
        instructorsLinks.map((adLink) => (
          <Link key={adLink.path} to={adLink.path}>
            <div className="bg-slate-200 flex items-center justify-between px-3 py-3 rounded hover:bg-slate-400">
              <p className="hidden md:block">{adLink.name}</p>
              <div>{React.createElement(adLink?.icon, { size: "30" })}</div>
            </div>
          </Link>
        ))}
    </div>
  );
};

export default Sidenav;
