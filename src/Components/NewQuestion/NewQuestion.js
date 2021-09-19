import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router";
import useInputState from "../../hooks/useInputState";
import { handleAddQuestion } from "../../Redux/Actions/NewQuestion";

const NewQuestion = () => {
  const authedUserReducer = useSelector(
    ({ authedUserReducer }) => authedUserReducer
  );
  const [optionOne, setOptionOne, resetOptionOne] = useInputState("");
  const [optionTwo, setOptionTwo, resetOptionTwo] = useInputState("");
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    dispatch(
      handleAddQuestion({
        optionOneText: optionOne,
        optionTwoText: optionTwo,
        author: authedUserReducer,
      })
    );
    history.push("/");
    resetOptionOne();
    resetOptionTwo();
  };

  return (
    <div>
      {authedUserReducer ? (
        <div>
          <h3>Create Question</h3>
          <h3>Would You rather...</h3>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="optionOne"
              id="optionOne"
              placeholder="Enter Option One"
              value={optionOne}
              onChange={setOptionOne}
            />

            <h3>OR</h3>

            <input
              type="text"
              name="optionTwo"
              id="optionTwo"
              placeholder="Enter Option Two"
              value={optionTwo}
              onChange={setOptionTwo}
            />

            <br />

            <button
              disabled={
                optionTwo.trim().length < 2 ?? optionOne.trim().length < 2
              }
              type="submit"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </form>
        </div>
      ) : (
        <Redirect to="/login" />
      )}
    </div>
  );
};

export default NewQuestion;
