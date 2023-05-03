import authReducer from "./authReducer";
import condidatsReducer from "./condidatsReducer";
import { combineReducers } from "redux";
const rootReducer = combineReducers({ authReducer, condidatsReducer });
export default rootReducer;
