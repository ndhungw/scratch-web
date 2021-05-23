import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsAuthenticated } from "./../../app/userSlice";

export default function PrivateRoute({ children, ...rest }) {
  const isAuthenticated = useSelector(selectIsAuthenticated);
  // const location = useLocation();

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
