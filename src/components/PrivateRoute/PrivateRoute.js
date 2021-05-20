import { Route, Redirect, useLocation } from "react-router-dom";
// import { useAuth } from "../../store/contexts/AuthContext";
import { useSelector } from "react-redux";
import { getCurrentUser, getIsLoading } from "../../store/slices/authSlice";

export default function PrivateRoute({ children, ...rest }) {
  // const { currentUser, isLoading } = useAuth();
  const isLoading = useSelector(getIsLoading);
  const currentUser = useSelector(getCurrentUser);

  console.log("from PrivateRoute: currentUser=", currentUser);
  console.log("from PrivateRoute: isLoading=", isLoading);
  const location = useLocation();
  console.log("location:", location);

  return (
    <>
      {
        // isAuthenticated()
        !isLoading && currentUser ? (
          <Route {...rest}>{children}</Route>
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              // state: {from: location.pathname}
            }}
          />
        )
      }
    </>
  );
}
