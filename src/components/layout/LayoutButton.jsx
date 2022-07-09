import React from "react";
import { NavLink } from "react-router-dom";

function LayoutButton({ Icon, goingTo = "/", onClick, additionalStyle }) {
  const navClassName = ({ isActive }) => {
    const commonStyle =
      "flex items-center space-x-2 rounded-full transition-all duration-200 hover:text-pink-800 hover:bg-gray-900" +
      additionalStyle;
    return isActive ? `${commonStyle} text-pink-800` : commonStyle;
  };

  return (
    <NavLink className={navClassName} to={goingTo} onClick={onClick}>
      <Icon className="w-6 h-6 sm:primary-icon" />
    </NavLink>
  );
}

export default LayoutButton;
