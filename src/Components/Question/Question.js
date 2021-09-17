import React from "react";
import { useSelector } from "react-redux";
import AnswerQuestion from "./AnswerQuestion/AnswerQuestion";
// import QuestionDetail from "./QuestionDetail/QuestionDetail";

const Question = (props) => {
  const authedUserReducer = useSelector(
    ({ authedUserReducer }) => authedUserReducer
  );

  const usersReducer = useSelector(({ usersReducer }) => usersReducer);
  const questions = useSelector(({ questionsReducer }) => questionsReducer);
  const questionId = props.match.params.unqId;

  const questionDetails =
    authedUserReducer &&
    Object.values(questions).find((question) => question.id === questionId);

  const authorDetails =
    authedUserReducer &&
    Object.values(usersReducer).find(
      (author) => author.id === questionDetails.author
    );

  return (
    <div>
      <AnswerQuestion
        questionDetails={questionDetails}
        authorDetails={authorDetails}
        qid={questionId}
      />
      {/* <QuestionDetail /> */}
    </div>
  );
};

export default Question;
