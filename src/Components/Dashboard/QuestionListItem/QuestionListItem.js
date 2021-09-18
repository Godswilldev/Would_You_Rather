import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const QuestionListItem = ({ author, optionOne, route }) => {
  const users = useSelector(({ usersReducer }) => usersReducer);

  const username = Object.values(users).find((user) => user.id === author);

  return (
    <div
      style={{
        backgroundColor: "#cafafa",
        margin: "1rem",
        padding: "1rem",
        width: "15rem",
      }}
    >
      <h3>{username.name} asks</h3>
      <img
        style={{ width: "100%", height: "12rem", borderRadius: "100%" }}
        src={username.avatarURL}
        alt={username.name}
      />
      <h4>Would You rather ?</h4>
      <p>... {optionOne.text.slice(0, 10)} ...</p>
      <Link to={route}>
        <button>View pool</button>
      </Link>
    </div>
  );
};

export default QuestionListItem;
