import { _saveQuestion } from "../../utils/_Data";
import { handleAddQuestionToUser } from "./Users";

export const NEW_QUESTION = "NEW_QUESTION";

export const addNewQuestion = (question) => ({
  type: NEW_QUESTION,
  question,
});

export const handleAddQuestion =
  ({ optionOneText, optionTwoText, author }) =>
  async (dispatch) => {
    try {
      const savedQuestion = await _saveQuestion({
        optionOneText,
        optionTwoText,
        author,
      });

      dispatch(addNewQuestion(savedQuestion));
      dispatch(handleAddQuestionToUser(savedQuestion));
    } catch (error) {
      console.log(`Error from handleAddQuestion action ${error}`);
    }
  };
