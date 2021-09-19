import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
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

  return authedUserReducer ? (
    <div>
      <AnswerQuestion
        questionDetails={questionDetails}
        authorDetails={authorDetails}
        qid={question_id}
      />
    </div>
  ) : (
    <div>
      <Redirect to="/login" />
    </div>
  );
};

export default Question;
