import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { removeUser } from "../../Redux/Actions/AuthedUser";

const Links = styled.div`
  a {
    text-decoration: none;
    font-size: 1.2rem;
  }
`;

const Nav = () => {
  const dispatch = useDispatch();
  const authedUser = useSelector(({ authedUserReducer }) => authedUserReducer);
  const users = useSelector(({ usersReducer }) => usersReducer);
  const username = Object.values(users).find((user) => user.id === authedUser);

  return (
    <Links
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: "#aafafa",
        height: "3rem",
      }}
    >
      <Link to="/dashboard">Home</Link>
      <Link to="/new">New Question</Link>
      <Link to="/leaderboard">Leaderboard</Link>
      {authedUser && (
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <img
            style={{ width: "2rem", height: "2rem", borderRadius: "100%" }}
            src={username.avatarURL}
            alt={username.name}
          />
          <h5>{username.name}</h5>
          <Link to="/login">
            <button onClick={() => dispatch(removeUser())}>Logout</button>
          </Link>
        </div>
      )}
    </Links>
  );
};

export default Nav;
