import { useContext, useState } from "react";
import { HiMenu, HiOutlineX, HiUser } from "react-icons/hi";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { setIsOpen1 } = useContext(AuthContext);
  return (
    <nav className="flex z-50 md:py-0 items-center justify-between bg-gray-800 text-white py-4 px-6 md:px-10">
      <div className="flex items-center w-24 overflow-hidden justify-center">
        <Link to="/">
          <img
            src="https://i.ibb.co/Qk0bfq9/logo.png"
            alt="Logo"
            className="w-16"
          />
        </Link>
      </div>
      {/* links */}
      <div
        className={`flex md:flex-row md:block flex-col absolute md:relative top-0 right-0 w-full md:w-auto h-screen md:h-auto bg-slate-900 md:bg-inherit backdrop-blur-md bg-opacity-50 p-10 md:p-0 ${
          isOpen ? "translate-x-0" : "translate-x-full hidden md:translate-x-0"
        }`}
      >
        <div
          onClick={() => {
            setIsOpen(false);
            setIsOpen1(false);
          }}
          className="bg-gray-600 z-50 md:hidden hover:bg-gray-700 cursor-pointer w-12 h-12 rounded-full flex items-center justify-center"
        >
          <HiOutlineX className="w-10 h-10" />
        </div>
        <ul className="flex flex-col md:flex-row mt-10 md:mt-0 gap-4 transition-colors">
          <li className="hover:bg-slate-700 transition-colors p-5 md:px-5 md:py-2 cursor-pointer text-center font-bold">
            <Link>Home</Link>
          </li>
          <li className="hover:bg-slate-700 transition-colors p-5 md:px-5 md:py-2 cursor-pointer text-center font-bold">
            <Link>Instructors</Link>
          </li>
          <li className="hover:bg-slate-700 transition-colors p-5 md:px-5 md:py-2 cursor-pointer text-center font-bold">
            <Link>clssses</Link>
          </li>
          <li className="hover:bg-slate-700 transition-colors p-5 md:px-5 md:py-2 cursor-pointer text-center font-bold">
            <Link>Dashboard</Link>
          </li>
        </ul>
      </div>
      <div className="flex items-center gap-3">
        <div className={``}>
          <div className={`border rounded-full cursor-pointer overflow-hidden`}>
            {/* <img src="" alt="" className="h-10 w-10" /> */}
            <HiUser className="h-10 w-10 -z-10" />
          </div>
        </div>
        {/* Hamburger Menu */}
        <div className="md:hidden">
          <button
            onClick={() => {
              setIsOpen(true);
              setIsOpen1(true);
            }}
            className="text-white focus:outline-none"
          >
            <HiMenu className="w-10 h-10" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
