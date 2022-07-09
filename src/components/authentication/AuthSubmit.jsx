import React from "react";

function AuthSubmit({ operation }) {
  return (
    <button type="submit" className="primary-btn">
      {operation}
    </button>
  );
}

export default AuthSubmit;
