import React from "react";
import { Link } from "react-router-dom";

function AuthOptions({ message, option }) {
  return (
    <div className="flex space-x-2">
      <p className="font-medium">{message}</p>
      <Link
        to={`/${option}`}
        className="uppercase text-pink-800 text-base font-bold">
        {option}
      </Link>
    </div>
  );
}

export default AuthOptions;
