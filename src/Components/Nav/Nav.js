import React from "react";
import { Link } from "react-router-dom";

const Nav = ({ loggedIn, logOut }) => {
  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/new">New Question</Link>
      <Link to="/leaderboard">Leaderboard</Link>
      {loggedIn && (
        <Link to="/login">
          <button onClick={() => logOut()}>Logout</button>
        </Link>
      )}
    </>
  );
};

export default Nav;
