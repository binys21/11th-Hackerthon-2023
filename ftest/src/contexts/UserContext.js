import React, { createContext, useContext, useState } from "react";

const UserContext = createContext();

export function AuthProvider({children}) {

  const [userId, setUserId] = useState(localStorage.getItem("userId"));
  const [username, setUserName] = useState(localStorage.getItem("username"));
  const [authToken, setAuthToken] = useState(localStorage.getItem("authToken"));

  const login = (id, username, token) => {
    setUserId(id);
    setUserName(username);
    setAuthToken(token);

    localStorage.setItem("userId", id);
    localStorage.setItem("username", username);
    localStorage.setItem("authToken", token);
  };

  const logout = () => {
    setUserId(null);
    setUserName(null);
    setAuthToken(null);

    localStorage.removeItem("userId");
    localStorage.removeItem("username");
    localStorage.removeItem("authToken");
  };

  const BASE_URL = "silverjek.pythonanywhere.com";

  return (
    <AuthContext.Provider
      value={{ authToken, username, userId, login, logout, BASE_URL }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(UserContext);
}