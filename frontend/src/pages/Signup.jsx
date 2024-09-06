import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// Assuming these components exist and are styled appropriately
import { Heading } from "../components/Heading";
import { Subheading } from "../components/Subheading";
import { InputBox } from "../components/InputBox";
import { Password } from "../components/Password";
import { Button } from "../components/Button";
import { Bottomwarning } from "../components/Bottomwarning";

export const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/v1/user/signup",
        {
          username,
          password,
          firstName,
          lastName,
        }
      );
      if (response.status === 200) {
        alert(response.data.message);
        localStorage.setItem("token", response.data.token);
        navigate("/dashboard");
      }
    } catch (error) {
      if (error.response && error.response.status === 411) {
        alert(error.response.data.message);
      } else {
        console.error("Signup failed", error);
        alert("Signup failed. Please try again.");
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-100 via-white to-cyan-100 p-6">
      <div className="w-full max-w-md">
        <form className="bg-white shadow-xl rounded-lg px-8 pt-6 pb-8 mb-4">
          <Heading label="Sign Up" />
          {/* <Subheading label="Enter your information to create an account" /> */}

          <div className="mb-4">
            <InputBox
              onChange={(e) => setFirstName(e.target.value)}
              label="First Name"
              placeholder="John"
            />
          </div>
          <div className="mb-4">
            <InputBox
              onChange={(e) => setLastName(e.target.value)}
              label="Last Name"
              placeholder="Doe"
            />
          </div>
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
              placeholder="Minimum 6 characters"
            />
          </div>
          <div className="flex items-center justify-between">
            <Button
              onClick={handleSignup}
              label="Sign Up Now"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
            />
          </div>
        </form>
        <Bottomwarning
          label="Already have an account?"
          to="/login"
          buttontext="Log in"
        />
      </div>
    </div>
  );
};

export default Signup;
