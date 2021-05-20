import { createContext, useContext, useEffect, useState } from "react";
import { USER_SAMPLE } from "../../constants/data";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export default function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const login = (email, password) => {
    console.log(`${email} - ${password}`);
    const userToLogin = USER_SAMPLE;
    setCurrentUser(userToLogin);
    localStorage.setItem("user", JSON.stringify(userToLogin));
  };

  const logout = () => {
    setCurrentUser(null);
    setIsLoading(false);
    localStorage.removeItem("user");
  };

  const signup = (email, password) => {
    console.log(`${email} - ${password}`);
  };

  useEffect(() => {
    const currentUserStringified = localStorage.getItem("user");
    const currentUser = JSON.parse(currentUserStringified);
    setCurrentUser(currentUser);
    setIsLoading(false);
    console.log(
      "useEffect on mount from AuthContext, currentUser: ",
      currentUser
    );
  }, []);

  const value = {
    currentUser,
    setCurrentUser,
    isLoading,
    setIsLoading,
    login,
    signup,
    logout,
  };
  return (
    <AuthContext.Provider value={value}>
      {console.log("isLoading:", isLoading)}
      {!isLoading && children}
    </AuthContext.Provider>
  );
}
