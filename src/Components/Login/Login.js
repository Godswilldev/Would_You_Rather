import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { authedUser } from "../../Redux/Actions/AuthedUser";

const Login = () => {
  const [authUser, setAuthUser] = useState("");
  const users = useSelector(({ usersReducer }) => usersReducer);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (authUser !== "") {
      dispatch(authedUser(authUser));
      history.push("/");
    }
  };

  return (
    <>
      <h3>LOGIN</h3>
      <form onSubmit={handleSubmit}>
        <select
          name="users"
          id="users"
          value={authUser}
          onChange={(evt) => setAuthUser(evt.target.value)}
        >
          <option value="">--- Select a User ---</option>

          {Object.keys(users).map((id) => (
            <option key={id} value={id}>
              {users[id].name}
            </option>
          ))}
        </select>
        <button type="submit">Log In</button>
      </form>
    </>
  );
};

export default Login;
