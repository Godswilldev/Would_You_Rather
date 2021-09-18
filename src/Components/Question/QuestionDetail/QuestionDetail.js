import React from "react";
import { useSelector } from "react-redux";

const QuestionDetail = (props) => {
  const id = props?.match?.params?.id;
  const qid = props?.qid;

  const uId = id || qid;

  const authedUserReducer = useSelector(
    ({ authedUserReducer }) => authedUserReducer
  );

  const usersReducer = useSelector(({ usersReducer }) => usersReducer);
  const questions = useSelector(({ questionsReducer }) => questionsReducer);

  const questionDetails =
    authedUserReducer &&
    Object.values(questions).find((question) => question.id === uId);

  const authorDetails =
    authedUserReducer &&
    Object.values(usersReducer).find(
      (author) => author.id === questionDetails.author
    );

  const optionOneVotes = questionDetails.optionOne.votes.length;
  const optionTwoVotes = questionDetails.optionTwo.votes.length;

  const totalVotes =
    questionDetails.optionOne.votes.length +
    questionDetails.optionTwo.votes.length;

  const optionOnePercentage = (optionOneVotes / totalVotes) * 100;
  const optionTwoPercentage = (optionTwoVotes / totalVotes) * 100;

  return (
    <div>
      <h3>{authorDetails.name} asks</h3>
      <h4>Results</h4>
      <img
        style={{ width: "100%", height: "12rem", borderRadius: "100%" }}
        src={authorDetails.avatarURL}
        alt={`${authorDetails.name} img`}
      />

      <div style={{ backgroundColor: "gray" }}>
        {questionDetails.optionOne.votes.includes(authedUserReducer) &&
          "Your Vote"}
        <h2>Would you rather {questionDetails.optionOne.text}</h2>
        <progress
          id="progress"
          value={optionOneVotes}
          max={totalVotes}
        ></progress>
        {optionOnePercentage}%
        <h3>
          {optionOneVotes} out of {totalVotes} votes
        </h3>
      </div>

      <div style={{ backgroundColor: "goldenrod" }}>
        {questionDetails.optionTwo.votes.includes(authedUserReducer) &&
          "Your Vote"}
        <h2>Would you rather {questionDetails.optionTwo.text}</h2>
        <progress
          id="progress"
          value={optionTwoVotes}
          max={totalVotes}
        ></progress>
        {optionTwoPercentage}%
        <h3>
          {optionTwoVotes} out of {totalVotes} votes
        </h3>
      </div>
    </div>
  );
};

export default QuestionDetail;
