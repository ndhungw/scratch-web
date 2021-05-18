// import { createContext, useEffect, useReducer } from "react";
// import { USER_SAMPLE } from "../../constants/data";

// import authReducer from "../reducers/authReducer";

// export const AuthContext = createContext();

// const initialState = {
//   userId: null,
//   user: null,
// };

// export default function AuthProvider({ children }) {
//   const [state, dispatch] = useReducer(authReducer, initialState);

//   useEffect(() => {
//     const userId = localStorage.getItem("userId");
//     console.log("useEffect - localStorage.getItem('userId')", userId);
//     if (userId) {
//       const user = USER_SAMPLE;
//       console.log("useEffect - userId - user: ", user);
//       dispatch({ type: "setUser", user: user });
//     }
//   }, [state.userId]);

//   return (
//     <AuthContext.Provider value={[state, dispatch]}>
//       {children}
//     </AuthContext.Provider>
//   );
// }

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
    const userToLogin = USER_SAMPLE;
    setCurrentUser(userToLogin);
    localStorage.setItem("user", JSON.stringify(userToLogin));
  };

  const logout = () => {
    setCurrentUser(null);
    setIsLoading(false);
    localStorage.removeItem("user");
  };

  const signup = (email, password) => {};

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
