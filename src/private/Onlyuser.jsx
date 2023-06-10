import { useContext } from "react";
import { Link, Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";

// eslint-disable-next-line react/prop-types
const Onlyuser = ({ children }) => {
  const location = useLocation();
  const { user, loading } = useContext(AuthContext);
  console.log(loading);
  if (!loading) {
    return user ? (
      <>{children}</>
    ) : (
      <>
        {console.log(location)}
        <Navigate to="/login" state={location} replace={true}>
          {Swal.fire({
            position: "top-right",
            text: "You have to log in first",
          })}
        </Navigate>
      </>
    );
  } else {
    return (
      <>
        <div className="flex items-center justify-center py-10">
          <div className="relative inline-block">
            <div
              className="absolute top-0 left-0 right-0 bottom-0 w-full h-full border-t-2 border-blue-500 rounded-full animate-spin"
              style={{
                borderWidth: "2rem",
                borderTopColor: "transparent",
                borderRightColor: "transparent",
                borderBottomColor: "transparent",
              }}
            ></div>
            <div
              className="absolute top-0 left-0 right-0 bottom-0 w-full h-full border-t-2 border-blue-200 rounded-full animate-spin"
              style={{
                borderWidth: "2rem",
                borderTopColor: "transparent",
                borderRightColor: "transparent",
                borderBottomColor: "transparent",
                animationDelay: "0.15s",
              }}
            ></div>
          </div>
        </div>
        <h1 className="text-3xl text-center mt-10">you have to login</h1>
        <div className="flex justify-center mt-5">
          <Link
            to="/login"
            className="py-2 px-4 bg-blue-700 text-white mx-auto"
            state={location}
          >
            go to login
          </Link>
        </div>
      </>
    );
  }
};

export default Onlyuser;
