import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router";
import {
  selectCurrentUser,
  selectIsAuthenticated,
} from "../../../redux/slices/userSlice";

export default function SignUpPage() {
  const currentUser = useSelector(selectCurrentUser);
  const isAuthenticated = useSelector(selectIsAuthenticated);

  if (isAuthenticated && currentUser.id) {
    return <Redirect to="/" />;
  }
  return <div>Sign up page</div>;
}
