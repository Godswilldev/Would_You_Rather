import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeUser } from "../../Redux/Actions/AuthedUser";

const Nav = () => {
  const dispatch = useDispatch();
  const authedUser = useSelector(({ authedUserReducer }) => authedUserReducer);
  const users = useSelector(({ usersReducer }) => usersReducer);
  const username = Object.values(users).find((user) => user.id === authedUser);

  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/new">New Question</Link>
      <Link to="/leaderboard">Leaderboard</Link>
      {authedUser && (
        <div style={{ display: "flex" }}>
          <h3>{username.name}</h3>
          <img
            style={{ width: "5rem", height: "5rem", borderRadius: "100%" }}
            src={username.avatarURL}
            alt={username.name}
          />
          <Link to="/login">
            <button onClick={() => dispatch(removeUser())}>Logout</button>
          </Link>
        </div>
      )}
    </>
  );
};

export default Nav;
