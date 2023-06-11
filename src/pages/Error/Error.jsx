import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-full md:w-2/4 lg:w-1/6">
        <img
          className="w-full"
          src="https://i.ibb.co/dKGLTZC/360-F-388638369-w-SBADh-Kfhi-Tx6-Q5-Pz1xfdpy6zotku1-Sg.jpg"
          alt="404 not found"
        />
      </div>
      <h1 className="text-3xl font-bold mb-10 text-center">Page not Found</h1>
      <Link to="/" className="bg-blue-600 px-5 py-2 rounded text-white">
        go to Home
      </Link>
    </div>
  );
};

export default Error;
