import React from "react";

function Spinner({ centerd = false, show, className }) {
  if (show) {
    return (
      <>
        {centerd ? (
          <div className="fixed z-50 inset-0 w-full h-full bg-white bg-opacity-10">
            <div className="absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4">
              <div className="w-8 h-8 rounded-full bg-transparent border-t-2 border-t-pink-800 animate-spin"></div>
            </div>
          </div>
        ) : (
          <div
            className={
              "w-8 h-8 rounded-full bg-transparent border-t-2 border-t-pink-800 animate-spin" +
              className
            }></div>
        )}
      </>
    );
  } else {
    return null;
  }
}

export default Spinner;
