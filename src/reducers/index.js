// Entry point for reducers
// Combines multiple reducers

import { combineReducers } from "redux";

import loading from "./loadingReducer";
import volumes from "./volumeReducer";
import highlights from "./highlightReducer";
import activities from "./activitiesReducer";

/*
 * combineReducers export the state as follows:
 * {loading: loading, volumes: volumes, highlights: highlights, activities: activities}
 */

export default combineReducers({
    loading
    , volumes
    , highlights
    , activities
});