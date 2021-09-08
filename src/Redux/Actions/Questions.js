import { _getQuestions } from "../../utils/_Data";

export const GET_QUESTIONS = "GET_QUESTIONS";

export const getQuestions = (questions) => ({
  type: GET_QUESTIONS,
  payload: questions,
});

export const getInitialQuestions = () => async (dispatch) => {
  try {
    const question = await _getQuestions();
    await dispatch(getQuestions(question));
  } catch (error) {
    console.log(`Error from getInitialQuestions ${error}`);
  }
};
