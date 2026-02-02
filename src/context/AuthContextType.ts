import { createContext } from "react";

interface AuthContextType {
  isAuthenticated: boolean;
  login: (email: string, password: string) => void;
  logout: () => void;
  email: string | null;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined,
);
