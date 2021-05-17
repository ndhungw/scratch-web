import { createContext } from "react";
import { USER_SAMPLE } from "../constants/data";

export const AuthContext = createContext();

const user = USER_SAMPLE;

const initialState = {
  isAuthenticated: true,
  user: user,
};

function AuthProvider({ children }) {
  const store = {
    testNumber: 1,
    ...initialState,
  };
  return <AuthContext.Provider value={store}>{children}</AuthContext.Provider>;
}

export default AuthProvider;
