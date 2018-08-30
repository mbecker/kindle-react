import { FETCH_VOLUMES } from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_VOLUMES:
      return action.payload;
    default:
      return state;
  }
};