import {combineReducers} from "redux";
import {displayReducer} from "./displayReducer";

export const rootReducer = combineReducers({
    display: displayReducer
});