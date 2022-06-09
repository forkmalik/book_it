import {combineReducers} from "redux";
import {displayReducer} from "./displayReducer";
import {typeReducer} from "./typeReducer";

export const rootReducer = combineReducers({
    display: displayReducer,
    classType: typeReducer
});