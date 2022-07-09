import React from "react";
import { createPortal } from "react-dom";

function Backdrop({ onClose }) {
  return createPortal(
    <div className="hidden" onClick={onClose}></div>,
    document.getElementById("backdrop")
  );
}

export default Backdrop;
