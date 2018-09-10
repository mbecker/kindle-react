import { FETCH_VOLUMES, UPDATE_VOLUMES } from "../actions/types";

import _ from "lodash";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_VOLUMES:
      return action.payload;
    case UPDATE_VOLUMES:
      console.log(state);
      const volumeIndex = _.findIndex(state, function (o) {
        return o.id === action.payload.volumeKey;
      });

      console.log(volumeIndex);

      const volume = state[volumeIndex];
      volume.data.volumeId = action.payload.volumeId;

      return state.map((item, index) => {
        if (index !== volumeIndex) {
          // This isn't the item we care about - keep it as-is
          return item;
        }

        // Otherwise, this is the one we want - return an updated value
        return {
          ...item,
          ...volume
        };
      });

    default:
      return state;
  }
};