import { START_FETCH_VOLUMES, FETCH_VOLUMES } from "../actions/types";

export default (state = false, action) => {
  switch (action.type) {
    case START_FETCH_VOLUMES:
      return true;
    case FETCH_VOLUMES:
      setTimeout(function(){ return false; }, 3000);
      // return false;
    default:
      return state;
  }
};