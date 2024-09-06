import { Link } from "react-router-dom";

export const Bottomwarning = ({ label, buttontext, to }) => {
  return (
    <div className="flex mb-3">
      <div>{label}</div>
      <Link className="pointer underline pl-1 cursor-pointer" to={to}>
        {buttontext}
      </Link>
    </div>
  );
};
