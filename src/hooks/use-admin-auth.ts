
import { useState, useEffect } from 'react';

// In a real application, this would be handled securely with a backend
// This is just a simple implementation for demo purposes
const ADMIN_USERNAME = "admin";
const ADMIN_PASSWORD = "church123";

interface AdminAuth {
  isAuthenticated: boolean;
  login: (username: string, password: string) => boolean;
  logout: () => void;
}

export const useAdminAuth = (): AdminAuth => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  
  // Check if the user is already logged in
  useEffect(() => {
    const authStatus = localStorage.getItem('faith-church-admin-auth');
    if (authStatus === 'true') {
      setIsAuthenticated(true);
    }
  }, []);
  
  const login = (username: string, password: string): boolean => {
    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      localStorage.setItem('faith-church-admin-auth', 'true');
      return true;
    }
    return false;
  };
  
  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('faith-church-admin-auth');
  };
  
  return {
    isAuthenticated,
    login,
    logout
  };
};
