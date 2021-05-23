import { Route, Redirect, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsAuthenticated } from "./../../app/userSlice";

export default function PrivateRoute({ children, ...rest }) {
  const isAuthenticated = useSelector(selectIsAuthenticated);

  // console.log("from PrivateRoute: currentUser=", currentUser);
  // console.log("from PrivateRoute: isLoading=", isLoading);
  // const location = useLocation();
  // console.log("location:", location);

  return (
    <>
      {isAuthenticated ? (
        <Route {...rest}>{children}</Route>
      ) : (
        <Redirect
          to={{
            pathname: "/login",
            // state: {from: location.pathname}
          }}
        />
      )}
    </>
  );
}
