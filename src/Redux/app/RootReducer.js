import { combineReducers } from "redux";
import usersReducer from "../Reducers/Users";
import authedUserReducer from "../Reducers/AuthedUser";

const rootReducer = combineReducers({ usersReducer, authedUserReducer });
export default rootReducer;
