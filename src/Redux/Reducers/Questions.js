import { GET_QUESTIONS } from "../Actions/Questions";

const initialState = {};

const questionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_QUESTIONS:
      return { ...state, ...action.payload };

    default:
      return state;
  }
};
export default questionsReducer;
