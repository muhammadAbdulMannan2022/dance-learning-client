import { useContext, useState } from "react";
import { HiMenu, HiOutlineX, HiUser } from "react-icons/hi";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { setIsOpen1, user, logOutUser } = useContext(AuthContext);
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
          <Link>
            <li className="hover:bg-slate-700 transition-colors p-5 md:px-5 md:py-2 cursor-pointer text-center font-bold">
              Home
            </li>
          </Link>
          <Link>
            <li className="hover:bg-slate-700 transition-colors p-5 md:px-5 md:py-2 cursor-pointer text-center font-bold">
              Instructors
            </li>
          </Link>
          <Link to="/classes">
            <li className="hover:bg-slate-700 transition-colors p-5 md:px-5 md:py-2 cursor-pointer text-center font-bold">
              clssses
            </li>
          </Link>
          {user && (
            <Link to="/dashbord">
              <li className="hover:bg-slate-700 transition-colors p-5 md:px-5 md:py-2 cursor-pointer text-center font-bold">
                Dashboard
              </li>
            </Link>
          )}
        </ul>
      </div>
      <div className="flex items-center gap-3">
        <div className={``}>
          {user && (
            <div
              className={`border rounded-full cursor-pointer overflow-hidden`}
            >
              <img
                src={`${user.photoURL}`}
                alt={`${user.displayName}`}
                className="h-10 w-10"
              />
            </div>
          )}
        </div>
        {user ? (
          <button
            onClick={logOutUser}
            className="py-1 px-2 rounded bg-slate-900 hover:bg-slate-700"
          >
            Log Out
          </button>
        ) : (
          <Link to="/login">
            <button className="py-1 px-2 rounded bg-slate-900 hover:bg-slate-700">
              Log In
            </button>
          </Link>
        )}
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
