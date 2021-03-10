import { STATS } from "../constants";

const statsReducer = (state = {}, action) => {
  console.log(action);
  switch (action.type) {
    case STATS.LOAD:
      return {
        ...state,
        [action.id]: {
          isLoading: true,
          downloads: null,
          error: false,
        },
      };
    case STATS.LOAD_SUCCESS:
      return {
        ...state,
        [action.id]: {
          isLoading: false,
          downloads: action.total,
          error: false,
        },
      };
    case STATS.LOAD_FAIL:
      return {
        ...state,
        [action.id]: {
          isLoading: false,
          downloads: null,
          error: true,
        },
      };

    default:
      return state
  }
};

export default statsReducer;
