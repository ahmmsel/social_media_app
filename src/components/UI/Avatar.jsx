import React from "react";
import { UserCircleIcon } from "@heroicons/react/solid";

function Avatar({ src, alt, className }) {
  return (
    <>
      {src ? (
        <img
          src={src}
          alt={alt}
          className={`primary-icon object-cover rounded-full ${className}`}
        />
      ) : (
        <UserCircleIcon className={`primary-icon ${className}`} />
      )}
    </>
  );
}

export default Avatar;
