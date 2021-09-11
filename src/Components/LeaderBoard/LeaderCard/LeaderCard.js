import React from "react";

const LeaderCard = () => {
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
        src=""
        alt="Alice Thomas"
      />
      <h3>Alice Thomas</h3>
      <p>Answered Questions</p>
      <p>Unanswered questions</p>
      <p>Score</p>
    </div>
  );
};

export default LeaderCard;
