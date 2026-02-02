import { useState, type ReactNode } from "react";
import { auth } from "../utils/auth";
import { AuthContext } from "./AuthContextType";

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return auth.isAuthenticated();
  });
  const [email, setEmail] = useState<string | null>(null);

  const login = (email: string, password: string) => {
    if (email && password) {
      auth.login();
      setIsAuthenticated(true);
      setEmail(email);
    }
  };

  const logout = () => {
    auth.logout();
    setIsAuthenticated(false);
    setEmail(null);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, email, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
