import React from "react";
import { useNavigate } from "react-router-dom";
import notFoundImage from "../assets/images/notFound.svg";

function NotFound() {
  const navigate = useNavigate();

  const handleNavigate = () => navigate("/");

  return (
    <section className="flex flex-col justify-center items-center space-y-4 h-screen primary-color">
      <img src={notFoundImage} alt="not found" className="w-3/4 sm:w-60" />
      <div className="flex flex-col items-center space-x-2 text-center text-base sm:text-2x">
        <h1 className="">sorry, this page is not available</h1>
        <button
          className="uppercase font-bold text-pink-800"
          onClick={handleNavigate}>
          going to home page
        </button>
      </div>
    </section>
  );
}

export default NotFound;
