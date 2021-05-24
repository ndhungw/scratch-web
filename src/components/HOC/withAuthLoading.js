/* eslint-disable react/display-name */
import React from "react";
import { useSelector } from "react-redux";
import SimpleBackdrop from "../BackDrop/SimpleBackDrop";
import { selectIsLoading } from "../../app/userSlice";

function withAuthLoading(Component) {
  return React.memo((props) => {
    const isLoading = useSelector(selectIsLoading);

    if (!isLoading) {
      return <Component {...props} />;
    }

    return (
      <SimpleBackdrop>
        <Component {...props} />
      </SimpleBackdrop>
    );
  });
}

export default withAuthLoading;
