import { PlusCircleIcon } from "@heroicons/react/solid";
import React from "react";
import Logo from "../UI/Logo";
import LayoutButton from "./LayoutButton";

function Header() {
  return (
    <header className="sticky top-0 z-40 bg-neutral-900 p-4">
      <div className="container flex justify-between items-center space-x-4">
        <Logo />
        <nav className="flex items-center space-x-4">
          <LayoutButton
            Icon={PlusCircleIcon}
            text="new post"
            goingTo="/new-post"
          />
        </nav>
      </div>
    </header>
  );
}

export default Header;
