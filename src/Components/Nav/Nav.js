import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeUser } from "../../Redux/Actions/AuthedUser";

const Nav = () => {
  const dispatch = useDispatch();
  const authedUser = useSelector(({ authedUserReducer }) => authedUserReducer);
  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/new">New Question</Link>
      <Link to="/leaderboard">Leaderboard</Link>
      {authedUser && (
        <Link to="/login">
          <button onClick={() => dispatch(removeUser())}>Logout</button>
        </Link>
      )}
    </>
  );
};

export default Nav;
