import { NEW_QUESTION } from "../Actions/NewQuestion";

const initialState = {};

const newQuestionReducer = (state = initialState, action) => {
  switch (action.type) {
    case NEW_QUESTION:
      return { ...state, ...action.payload };

    default:
      return state;
  }
};
export default newQuestionReducer;
