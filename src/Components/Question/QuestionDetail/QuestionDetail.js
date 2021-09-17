import React from "react";

const QuestionDetail = (props) => {
  const { id } = props.match.params;
  return (
    <div>
      <h3>Question detail page {id} </h3>
    </div>
  );
};

export default QuestionDetail;
