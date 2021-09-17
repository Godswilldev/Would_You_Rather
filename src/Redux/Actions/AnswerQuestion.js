import { _saveQuestionAnswer } from "../../utils/_Data";
import { addAnswerToUser } from "./Users";
export const ANSWER_QUESTION = "ANSWER_QUESTION";

export const addAnswerToQuestion = ({ authedUser, qid, answer }) => ({
  type: ANSWER_QUESTION,
  authedUser,
  qid,
  answer,
});

export const handleAnswerQuestion =
  (authedUser, qid, answer) => async (dispatch) => {
    try {
      const res = await _saveQuestionAnswer({ authedUser, qid, answer });
      dispatch(addAnswerToQuestion(res));
      dispatch(addAnswerToUser(res));
    } catch (error) {
      console.log(`Error from handleAnswerQuestion ${error} `);
    }
  };
