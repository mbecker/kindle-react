import { FECTH_ACTIVITES } from "../actions/types";

import _ from "lodash";

export default (state = {}, action) => {
  switch (action.type) {
    case FECTH_ACTIVITES:
    return action.payload;
    default:
      return state;
  }
};