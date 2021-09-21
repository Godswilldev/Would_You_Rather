import React from "react";
import { useSelector } from "react-redux";
import AnswerQuestion from "./AnswerQuestion/AnswerQuestion";
import Result from "./Result/Result";

const Question = ({ ...rest }) => {
  const authedUserReducer = useSelector(
    ({ authedUserReducer }) => authedUserReducer
  );

  const usersReducer = useSelector(({ usersReducer }) => usersReducer);
  const questions = useSelector(({ questionsReducer }) => questionsReducer);
  const question_id = rest?.match?.params.question_id;

  const questionDetails =
    authedUserReducer &&
    usersReducer &&
    questions &&
    Object.values(questions).find((question) => question.id === question_id);

  const authorDetails =
    authedUserReducer &&
    usersReducer &&
    questions &&
    Object.values(usersReducer).find(
      (author) => author.id === questionDetails.author
    );

  return (
    <div>
      {Object.keys(usersReducer[authedUserReducer].answers).includes(
        question_id
      ) ? (
        <Result question_id={question_id} />
      ) : (
        <AnswerQuestion
          questionDetails={questionDetails}
          authorDetails={authorDetails}
          qid={question_id}
        />
      )}
    </div>
  );
};

export default Question;
