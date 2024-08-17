// src/contexts/AuthContext.jsx
import React, { createContext, useState, useContext, useEffect } from 'react';
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth';
import { app } from '../firebase'; // Adjust the path as needed

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const auth = getAuth(app);

  const login = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setIsAuthenticated(true);
    } catch (error) {
      console.error('Login error:', error.message);
      throw error; // Ensure errors propagate to the component
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
      setIsAuthenticated(false);
      setUser(null);
    } catch (error) {
      console.error('Logout error:', error.message);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setIsAuthenticated(!!currentUser);
    });

    return () => unsubscribe();
  }, [auth]);

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
