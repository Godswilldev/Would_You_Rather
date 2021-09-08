import { combineReducers } from "redux";
import usersReducer from "../Reducers/Users";
import authedUserReducer from "../Reducers/AuthedUser";
import questionsReducer from "../Reducers/Questions";

const rootReducer = combineReducers({
  usersReducer,
  authedUserReducer,
  questionsReducer,
});
export default rootReducer;
