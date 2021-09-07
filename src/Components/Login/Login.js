import React from "react";

const Login = ({ logIn }) => {
  return (
    <div>
      <h3>Hello from the Login view</h3>
      <button onClick={() => logIn()}>Log In</button>
    </div>
  );
};

export default Login;
