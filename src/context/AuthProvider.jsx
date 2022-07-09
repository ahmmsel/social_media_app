import React, { useReducer } from "react";
import jwtDecode from "jwt-decode";
import { AuthContext } from ".";
import { LOGIN, LOGOUT } from "../constant";

const initialState = { user: null };

if (localStorage.getItem("user")) {
  const token = JSON.parse(localStorage.getItem("user"))?.token;
  const decodedToken = jwtDecode(token);

  if (decodedToken.exp * 1000 < Date.now()) localStorage.removeItem("user");
  else initialState.user = decodedToken;
}

function authReducer(state, action) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        user: action.payload,
      };
    case LOGOUT:
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
}

function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(authReducer, initialState);

  const login = (data) => {
    localStorage.setItem("user", JSON.stringify(data));
    dispatch({ type: LOGIN, payload: data });
  };

  const logout = () => {
    localStorage.removeItem("user");
    dispatch({ type: LOGOUT });
  };

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        login,
        logout,
      }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
