import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../context";

function ProtectedPage() {
  const ctx = useContext(AuthContext);
  if (ctx.user) {
    return <Outlet />;
  } else {
    return <Navigate to="/login" />;
  }
}

export default ProtectedPage;
