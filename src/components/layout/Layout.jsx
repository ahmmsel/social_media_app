import React from "react";
import { Outlet, useLocation } from "react-router-dom";

import Header from "./Header";
import Bottombar from "./Bottombar";
import Searchbar from "./Searchbar";

function Layout() {
  const location = useLocation();

  return (
    <div className="primary-color">
      {location.pathname === "/explore" ? <Searchbar /> : <Header />}
      <main className="container my-6 mb-16">
        <Outlet />
      </main>
      <Bottombar />
    </div>
  );
}

export default Layout;
