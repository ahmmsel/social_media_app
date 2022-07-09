import { ExclamationCircleIcon } from "@heroicons/react/solid";
import React from "react";

function SingleError({ message, show }) {
  if (show) {
    return (
      <div className="flex items-center space-x-2">
        <ExclamationCircleIcon className="primary-icon text-red-700" />
        <p className="text-red-700 font-semibold">{message}</p>
      </div>
    );
  } else {
    return null;
  }
}

export default SingleError;
