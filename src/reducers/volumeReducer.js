import { FETCH_VOLUMES, UPDATE_VOLUMES } from "../actions/types";

import _ from "lodash";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_VOLUMES:
      return action.payload;
    default:
      return state;
  }
};