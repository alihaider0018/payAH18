import React from "react";
import { Link } from "react-router-dom";

const ArrowRightIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
      clipRule="evenodd"
    />
  </svg>
);

export const Landing = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-50 via-white to-cyan-100 text-gray-800 p-6 mt-14 sm:mt-0">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl sm:text-7xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-cyan-600">
          PayAH18 Finance Platform
        </h1>
        <p className="text-xl sm:text-2xl mb-12 text-gray-600">
          Empower your financial future with our cutting-edge solutions
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/signup"
            className="group relative inline-flex items-center justify-center px-8 py-3 text-lg font-medium text-white transition-all duration-200 bg-indigo-600 rounded-full hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
          >
            Get Started
            <span className="ml-2 group-hover:translate-x-1 transition-transform">
              <ArrowRightIcon />
            </span>
          </Link>
          <Link
            to="/login"
            className="inline-flex items-center justify-center px-8 py-3 text-lg font-medium text-indigo-600 bg-white border-2 border-indigo-600 rounded-full hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
          >
            Log In
          </Link>
        </div>
      </div>
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
        {["Secure", "Fast", "Innovative"].map((feature, index) => (
          <div
            key={index}
            className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow"
          >
            <h3 className="text-xl font-semibold mb-2">{feature}</h3>
            <p className="text-gray-600">
              Experience {feature.toLowerCase()} financial management
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Landing;
