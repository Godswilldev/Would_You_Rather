import React from "react";
import { useSelector } from "react-redux";
import AnswerQuestion from "./AnswerQuestion/AnswerQuestion";

const Question = (props) => {
  const authedUserReducer = useSelector(
    ({ authedUserReducer }) => authedUserReducer
  );

  const usersReducer = useSelector(({ usersReducer }) => usersReducer);
  const questions = useSelector(({ questionsReducer }) => questionsReducer);
  const { question_id } = props?.match?.params;

  const questionDetails =
    authedUserReducer &&
    Object.values(questions).find((question) => question.id === question_id);

  const authorDetails =
    authedUserReducer &&
    Object.values(usersReducer).find(
      (author) => author.id === questionDetails.author
    );

  return (
    <AnswerQuestion
      questionDetails={questionDetails}
      authorDetails={authorDetails}
      qid={question_id}
    />
  );
};

export default Question;
