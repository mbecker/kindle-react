// Entry point for reducers
// Combines multiple reducers

import { combineReducers } from "redux";

import volumes from "./volumeReducer";
import highlights from "./highlightReducer";

export default combineReducers({
    volumes
    , highlights
});