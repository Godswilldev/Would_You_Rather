import React from "react";
import favicon from "./favicon.ico";

const QuestionListItem = () => {
  return (
    <div
      style={{
        backgroundColor: "#cafafa",
        margin: "1rem",
        padding: "1rem",
        width: "15rem",
      }}
    >
      <h3>Alice Thomas asks</h3>
      <img src={favicon} alt="Alice Thomas avatar" />
      <h4>Would You rather ?</h4>
      <p>... always be 10mins ...</p>
      <button>View pool</button>
    </div>
  );
};

export default QuestionListItem;
