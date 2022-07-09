import React from "react";
import Suggestions from "./Suggestions";

function Widget() {
  return (
    <div className="hidden md:block col-span-3 border-l border-gray-900">
      <div className="sticky top-0 p-4">
        <Suggestions />
      </div>
    </div>
  );
}

export default Widget;
