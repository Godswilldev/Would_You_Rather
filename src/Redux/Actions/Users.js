import { _getUsers } from "../../utils/_Data";

export const GET_USERS = "GET_USERS";
export const ADD_QUESTION_TO_USER = "ADD_QUESTION_TO_USER";
export const ADD_ANSWER_TO_USER = "ADD_ANSWER_TO_USER";

export const getUsers = (users) => ({
  type: GET_USERS,
  payload: users,
});

export const addQuestionToUser = (question) => ({
  type: ADD_QUESTION_TO_USER,
  question,
});

export const addAnswerToUser = ({ authedUser, qid, answer }) => ({
  type: ADD_ANSWER_TO_USER,
  authedUser,
  qid,
  answer,
});

export const getInitialUsers = () => async (dispatch) => {
  try {
    const users = await _getUsers();
    await dispatch(getUsers(users));
  } catch (error) {
    console.log(`Error from getInitialUsers ${error}`);
  }
};

export const handleAddQuestionToUser = (question) => async (dispatch) =>
  dispatch(addQuestionToUser(question));

// export const handleAddAnswerToUser = (answer) => async (dispatch) =>
//   dispatch(addAnswerToUser(answer));
