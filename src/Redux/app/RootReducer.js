import { combineReducers } from "redux";
import usersReducer from "../Reducers/Users";
import authedUserReducer from "../Reducers/AuthedUser";
import questionsReducer from "../Reducers/Questions";
import newQuestionReducer from "../Reducers/NewQuestion";

const rootReducer = combineReducers({
  usersReducer,
  authedUserReducer,
  questionsReducer,
  newQuestionReducer,
});
export default rootReducer;
