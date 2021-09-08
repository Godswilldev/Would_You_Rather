import { GET_USERS } from "../Actions/Users";

const initialState = {};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
      return { ...state, ...action.payload };

    default:
      return state;
  }
};
export default usersReducer;
