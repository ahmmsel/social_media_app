import { createContext } from "react";

const AuthContext = createContext({
  isAuthenticated: false,
  user: null,
  login: (data) => {},
  logout: () => {},
});

export { AuthContext };
