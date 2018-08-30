import { FETCH_HIGHLIGHTS } from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_HIGHLIGHTS:
      return action.payload;
    default:
      return state;
  }
};