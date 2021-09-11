import React from "react";

const LeaderCard = ({
  name,
  avatarURL,
  questionsLength,
  answersLength,
  score,
}) => {
  return (
    <div
      style={{
        backgroundColor: "#cafafa",
        margin: "1rem",
        padding: "1rem",
        width: "15rem",
      }}
    >
      <img
        style={{ width: "100%", height: "12rem", borderRadius: "100%" }}
        src={avatarURL}
        alt={name}
      />
      <h3>{name}</h3>
      <p>Answered Questions: {answersLength} </p>
      <p>Unanswered questions: {questionsLength} </p>
      <p>Score: {score} </p>
    </div>
  );
};

export default LeaderCard;
