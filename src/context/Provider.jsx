import React from "react";
import AuthProvider from "./AuthProvider";

function Provider({ children }) {
  return <AuthProvider>{children}</AuthProvider>;
}

export default Provider;
