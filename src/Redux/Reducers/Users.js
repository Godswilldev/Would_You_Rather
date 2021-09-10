import { GET_USERS, ADD_QUESTION_TO_USER } from "../Actions/Users";

const initialState = {};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
      return { ...state, ...action.payload };

    case ADD_QUESTION_TO_USER:
      return {
        ...state,
        [action.question.author]: {
          ...state[action.question.author],
          questions: state[action.question.author].questions.concat([
            action.question.id,
          ]),
        },
      };

    // case ADD_ANSWER_TO_USER:
    //   return {
    //     ...state,
    //     [action.authedUser]: {
    //       ...state[action.authedUser],
    //       answers: {
    //         ...state[action.authedUser].answers,
    //         [action.qid]: action.answer,
    //       },
    //     },
    //   };

    default:
      return state;
  }
};
export default usersReducer;
