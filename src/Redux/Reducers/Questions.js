import { GET_QUESTIONS } from "../Actions/Questions";
import { NEW_QUESTION } from "../Actions/NewQuestion";
import { ANSWER_QUESTION } from "../Actions/AnswerQuestion";

const initialState = {};

const questionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_QUESTIONS:
      return { ...state, ...action.payload };

    case NEW_QUESTION:
      return { ...state, [action.question.id]: action.question };

    case ANSWER_QUESTION:
      return {
        ...state,
        [action.qid]: {
          ...state[action.qid],
          [action.answer]: {
            ...state[action.qid][action.answer],
            votes: state[action.qid][action.answer].votes.concat([
              action.authedUser,
            ]),
          },
        },
      };

    default:
      return state;
  }
};
export default questionsReducer;
