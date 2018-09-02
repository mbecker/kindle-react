import { START_FETCH_VOLUMES, FETCH_VOLUMES } from "../actions/types";

export default (state = false, action) => {
  switch (action.type) {
    case START_FETCH_VOLUMES:
      // isLoading -> false
      return true;
    case FETCH_VOLUMES:
      // isLoading -> false
      return false;
    default:
      return state;
  }
};