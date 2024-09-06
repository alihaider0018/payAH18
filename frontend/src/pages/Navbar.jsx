import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="flex fixed top-0 w-full items-center justify-between bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg shadow-lg h-16 z-50">
      <div className="ml-6">
        <h1 className="text-2xl text-blue-900 font-bold">PayAH18</h1>
      </div>
    </div>
  );
};
