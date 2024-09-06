import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BalancePage } from "../components/BalancePage";
import { Users } from "../components/Users";

export const Dashboard = () => {
  const navigate = useNavigate();
  const [userFullName, setUserFullName] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/");
    } else {
      // Fetch user information
      axios
        .get("https://payah18.onrender.com/api/v1/user/me", {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
          const { firstName, lastName } = response.data;
          setUserFullName(`${firstName} ${lastName}`);
        })
        .catch((error) => {
          console.error("Error fetching user data:", error);
          // Handle error (e.g., invalid token)
          localStorage.removeItem("token");
          navigate("/");
        });
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-cyan-100 mt-14">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-indigo-600">Dashboard</h1>
            {userFullName && (
              <p className="text-lg text-gray-600 mt-2">
                Hello, {userFullName}
              </p>
            )}
          </div>
          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg transition duration-150 ease-in-out"
          >
            Log out
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <BalancePage />
          </div>
          <div className="md:col-span-2">
            <Users />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
