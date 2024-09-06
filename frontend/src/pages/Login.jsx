import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { Heading } from "../components/Heading";
import { Subheading } from "../components/Subheading";
import { InputBox } from "../components/InputBox";
import { Password } from "../components/Password";
import { Button } from "../components/Button";
import { Bottomwarning } from "../components/Bottomwarning";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        "https://payah18.onrender.com/api/v1/user/signin",
        {
          username,
          password,
        }
      );
      if (response.status === 200) {
        localStorage.setItem("token", response.data.token);
        navigate("/dashboard");
      }
    } catch (error) {
      if (error.response && error.response.status === 400)
        alert(error.response.data.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-100 via-white to-cyan-100 p-6">
      <div className="w-full max-w-md">
        <form className="bg-white shadow-xl rounded-lg px-8 pt-6 pb-8 mb-4">
          <Heading label="Log In" />
          {/* <Subheading label="Enter your credentials to access your account" /> */}

          <div className="mb-4">
            <InputBox
              onChange={(e) => setUsername(e.target.value)}
              label="Email"
              placeholder="johndoe@example.com"
            />
          </div>
          <div className="mb-6">
            <Password
              onChange={(e) => setPassword(e.target.value)}
              label="Password"
              placeholder="Enter your password"
            />
          </div>
          <div className="flex items-center justify-between">
            <Button
              onClick={handleLogin}
              label="Log In"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
            />
          </div>
        </form>
        <Bottomwarning
          label="Don't have an account?"
          to="/signup"
          buttontext="Sign Up"
        />
      </div>
    </div>
  );
};

export default Login;
