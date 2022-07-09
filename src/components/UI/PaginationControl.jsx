import React from "react";

function PaginationControl({ disabled, Icon, onClick }) {
  return (
    <button
      className={`flex justify-start items-center space-x-1 disabled:opacity-50`}
      disabled={disabled}
      onClick={onClick}>
      <Icon className="w-5 h-5" />
    </button>
  );
}

export default PaginationControl;
