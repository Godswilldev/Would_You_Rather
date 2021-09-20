import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { Route } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const authUser = useSelector(({ authedUserReducer }) => authedUserReducer);

  return (
    <Route
      {...rest}
      component={(props) =>
        authUser ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
