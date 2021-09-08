import { combineReducers } from "redux";
import usersReducer from "../Reducers/Users";

const rootReducer = combineReducers({ usersReducer });
export default rootReducer;
