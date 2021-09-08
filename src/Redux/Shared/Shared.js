import { getInitialUsers } from "../Actions/Users";
import { getInitialQuestions } from "../Actions/Questions";

export const handleInitialData = () => async (dispatch) => {
  dispatch(getInitialUsers());
  dispatch(getInitialQuestions());
};
