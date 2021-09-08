import { AUTHED_USER } from "../Actions/AuthedUser";

const authedUserReducer = (state = null, action) => {
  switch (action.type) {
    case AUTHED_USER:
      return action.payload;

    default:
      return state;
  }
};

export default authedUserReducer;
