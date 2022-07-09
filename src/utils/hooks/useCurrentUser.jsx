import { useContext } from "react";
import { AuthContext } from "../../context";

function useCurrentUser() {
  const ctx = useContext(AuthContext);

  const currentUserId = ctx.user.id;

  const isCurrentUser = (userId, secondUser) =>
    currentUserId === userId || currentUserId === secondUser;

  return {
    currentUserId,
    isCurrentUser,
  };
}

export default useCurrentUser;
