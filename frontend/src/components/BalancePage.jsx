import React, { useEffect, useState } from "react";
import axios from "axios";

export const BalancePage = () => {
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    axios
      .get("https://payah18.onrender.com/api/v1/account/balance", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((response) => {
        setBalance(response.data.balance);
      })
      .catch((error) => {
        console.error("Error fetching balance:", error);
      });
  }, []);

  return <Balance value={balance} />;
};

const Balance = ({ value }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4 text-indigo-600">Your Balance</h2>
      <div className="text-4xl font-bold text-gray-800">
        Rs. {value.toLocaleString()}
      </div>
    </div>
  );
};

export default BalancePage;
