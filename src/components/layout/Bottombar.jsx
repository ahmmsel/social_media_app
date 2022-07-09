import React, { useContext } from "react";
import {
  HomeIcon,
  SearchIcon,
  LogoutIcon,
  UserIcon,
  CogIcon,
} from "@heroicons/react/solid";

import { AuthContext } from "../../context";
import LayoutButton from "./LayoutButton";

function Bottombar() {
  const ctx = useContext(AuthContext);

  return (
    <div className="fixed bottom-0 bg-neutral-900 z-40 w-full overflow-hidden ">
      <div className="container flex items-center justify-between sm:justify-evenly  h-12 border-t border-zinc-800">
        <LayoutButton Icon={HomeIcon} goingTo="/" />
        <LayoutButton Icon={SearchIcon} goingTo="/explore" />
        <LayoutButton Icon={UserIcon} goingTo={"/profile/" + ctx.user.id} />
        <LayoutButton Icon={CogIcon} goingTo="/settings" />
        <LayoutButton Icon={LogoutIcon} goingTo="/login" onClick={ctx.logout} />
      </div>
    </div>
  );
}

export default Bottombar;
