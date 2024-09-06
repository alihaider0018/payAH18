import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button } from "./Button";

export const Users = () => {
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    axios
      .get("https://payah18.onrender.com/api/v1/user/bulk?filter=" + filter, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((response) => {
        setUsers(response.data.users);
      });
  }, [filter]);

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4 text-indigo-600">Users</h2>
      <div className="mb-4">
        <input
          onChange={(e) => setFilter(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          placeholder="Search Users..."
        />
      </div>
      <div className="space-y-4">
        {users.map((user) => (
          <User key={user._id} user={user} />
        ))}
      </div>
    </div>
  );
};

function User({ user }) {
  const navigate = useNavigate();

  return (
    <div className="flex justify-between items-center bg-gray-50 p-4 rounded-md">
      <div className="flex items-center">
        <div className="rounded-full h-12 w-12 bg-indigo-200 flex justify-center items-center mr-4">
          <span className="text-xl font-semibold text-indigo-600">
            {user.firstName[0]}
          </span>
        </div>
        <div>
          <h3 className="font-semibold">
            {user.firstName} {user.lastName}
          </h3>
        </div>
      </div>
      <Button
        onClick={() => navigate(`/send?id=${user._id}&name=${user.firstName}`)}
        label="Send"
        className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-md transition duration-150 ease-in-out w-20 text-sm"
      />
    </div>
  );
}

export default Users;
