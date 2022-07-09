import React from "react";
import { Link } from "react-router-dom";

function ProfileAnalytic({ total, name, to = null }) {
  return (
    <Link to={to ?? name} className="flex flex-col items-center" role="button">
      <small className="font-bold">{total}</small>
      <p className="font-medium text-xs sm:text-base">{name}</p>
    </Link>
  );
}

export default ProfileAnalytic;
