import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import useInputState from "../../../hooks/useInputState";
import { handleAnswerQuestion } from "../../../Redux/Actions/AnswerQuestion";

const AnswerQuestion = ({ questionDetails, authorDetails, qid }) => {
  const authedUser = useSelector(({ authedUserReducer }) => authedUserReducer);
  const [answer, setAnswer] = useInputState("");
  const history = useHistory();
  const dispatch = useDispatch();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch(handleAnswerQuestion(authedUser, qid, answer));
    history.push(`/questions/${qid}`);
  };

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
        src={authorDetails.avatarURL}
        alt={`${authorDetails.name} img`}
      />

      <h3>{authorDetails.name} asks: </h3>
      <h3>Would you rather...</h3>

      <form onSubmit={handleSubmit}>
        <input
          type="radio"
          name="option"
          id="optionOne"
          value="optionOne"
          onChange={setAnswer}
        />
        <label htmlFor="optionOne"> {questionDetails.optionOne.text} </label>

        <br />
        <h5>OR</h5>
        <input
          type="radio"
          name="option"
          id="optionTwo"
          value="optionTwo"
          onChange={setAnswer}
        />
        <label htmlFor="optionTwo">{questionDetails.optionTwo.text}</label>

        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AnswerQuestion;
