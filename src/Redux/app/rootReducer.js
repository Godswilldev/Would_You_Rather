import { combineReducers } from "redux";
import formReducer from "../features/Form/formReducer";

const rootReducer = combineReducers({ formReducer });
export default rootReducer;
