import { _saveQuestion } from "../../utils/_Data";
import { handleAddQuestionToUser } from "./Users";

export const NEW_QUESTION = "NEW_QUESTION";

export const addNewQuestion = (question) => ({
  type: NEW_QUESTION,
  question,
});

export const handleAddQuestion =
  ({ optionOneText, optionTwoText, author }) =>
  async (dispatch, getstate, { getFirebase, getFirestore }) => {
    try {
      const fireStore = await getFirestore();
      await fireStore.collection("questions").add({
        optionOne: {
          text: optionOneText,
          votes: [],
        },
        optionTwo: {
          text: optionTwoText,
          votes: [],
        },
        author,
        timestamp: Date.now(),
        id: 123,
      });
      const savedQuestion = await _saveQuestion({
        optionOneText,
        optionTwoText,
        author,
      });

      await dispatch(addNewQuestion(savedQuestion));
      await dispatch(handleAddQuestionToUser(savedQuestion));
    } catch (error) {
      console.log(`Error from handleAddQuestion action ${error}`);
    }
  };
