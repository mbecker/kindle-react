// Entry point for reducers
// Combines multiple reducers

import { combineReducers } from "redux";

import loading from "./loadingReducer";
import volumes from "./volumeReducer";
import highlights from "./highlightReducer";

export default combineReducers({
    loading
    , volumes
    , highlights
});