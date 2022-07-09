import React from "react";

function PaginationNumber({ number, onClick, currentPage }) {
  return (
    <p
      className={`hover:text-pink-900 hover:underline transition-all duration-200 font-medium ${
        currentPage && "text-pink-900"
      }`}
      onClick={onClick}
      role="button">
      {number}
    </p>
  );
}

export default PaginationNumber;
