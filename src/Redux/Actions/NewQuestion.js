import { _saveQuestion } from "../../utils/_Data";

export const NEW_QUESTION = "NEW_QUESTION";

export const addNewQuestion = (question) => ({
  type: NEW_QUESTION,
  question,
});

export const handleAddQuestion =
  (optionOneText, optionTwoText) => async (dispatch, getState) => {
    try {
      const { authedUserReducer } = getState();

      const save = await _saveQuestion({
        optionOneText,
        optionTwoText,
        author: authedUserReducer,
      });

      await dispatch(addNewQuestion(save));
    } catch (error) {
      console.log(`Error from saveQuestion action ${error}`);
    }
  };
