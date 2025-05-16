import { createContext } from "react";

export type User = {
  name: string;
  email: string;
  password: string;
  isLoggedIn: boolean;
} | null;

export type UserContextType = {
  user: User;
  setUser: (user: User) => void;
};

export const UserContext = createContext<UserContextType>({
  user: null,
  setUser: () => {},
});

