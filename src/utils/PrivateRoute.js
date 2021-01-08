import React, { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function PrivateRoute({ component: Component, ...rest }) {
  const { userAuth } = useContext(AuthContext);

  return (
    <Route
      {...rest}
      render={(props) =>
        userAuth ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
}

export default PrivateRoute;
