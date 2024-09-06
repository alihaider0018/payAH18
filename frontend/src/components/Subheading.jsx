import React from "react";

export const Subheading = ({ label }) => {
  return (
    <h2 className="text-gray-600 text-sm font-medium mb-0 mt-1 text-center max-w-xs mx-auto">
      {label}
    </h2>
  );
};

export default Subheading;
