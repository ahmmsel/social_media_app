import React from "react";
import { createPortal } from "react-dom";
import { XIcon } from "@heroicons/react/solid";

function MainModal({ onClose, children, show }) {
  if (show) {
    return createPortal(
      <>
        <div className="fixed w-full h-screen z-50 primary-gradient primary-color">
          <div className="flex flex-col space-y-12">
            <XIcon
              className="primary-icon sm:w-12 sm:h-12 absolute top-2 right-2 p-1 hover:bg-gray-600 rounded-full transition-all duration-300"
              role="button"
              onClick={onClose}
            />
            <div>{children}</div>
          </div>
        </div>
      </>,
      document.getElementById("modal")
    );
  } else {
    return null;
  }
}

export default MainModal;
