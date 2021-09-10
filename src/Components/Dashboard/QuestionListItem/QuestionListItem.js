import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const QuestionListItem = ({ id, author, optionOne, optionTwo }) => {
  const users = useSelector(({ usersReducer }) => usersReducer);
  console.log(users);
  const username = Object.values(users).find((user) => user.id === author);
  console.log(username);

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
      <Link to={`/question/${id}`}>
        <button>View pool</button>
      </Link>
    </div>
  );
};

export default QuestionListItem;
