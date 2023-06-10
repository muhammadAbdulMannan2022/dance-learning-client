import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

// eslint-disable-next-line react/prop-types
const Onlyinstructor = ({ children }) => {
  const { userFdb, loading } = useContext(AuthContext);
  console.log(loading);
  if (!loading) {
    return userFdb.rol === "instructor" ? (
      <>{children}</>
    ) : (
      <>
        {/* {console.log(location)} */}
        <Navigate to="/dashbord"></Navigate>
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
      </>
    );
  }
};

export default Onlyinstructor;
