import React, { createContext, useState, useContext } from 'react';
import authService from '../features/authService';

// 1. Create the context
const AuthContext = createContext();

// 2. Create the Provider component
// This component will wrap your entire app and manage the auth state.
export function AuthProvider({ children }) {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));

  const login = async (userData) => {
    const loggedInUser = await authService.login(userData);
    if (loggedInUser) {
      setUser(loggedInUser);
    }
    return loggedInUser; // Return user so Login page can react
  };

  const logout = () => {
    authService.logout();
    setUser(null);
  };

  // The value that will be available to all children components
  const value = {
    user,
    token: user?.token, // Provide easy access to the token
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

// 3. Create a custom hook for easy access
// Components will use this instead of useContext(AuthContext)
export function useAuth() {
  return useContext(AuthContext);
}