import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsAuthenticated } from "../../redux/slices/userSlice";
import { ReactNode } from "react";

type PrivateRouteProps = {
  children: ReactNode;
  [key: string]: any;
};

export default function PrivateRoute({ children, ...rest }: PrivateRouteProps) {
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
