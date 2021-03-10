import { IMAGES } from "../constants";

const app = (state = 3, action) => {
  switch (action.type) {
    case IMAGES.LOAD_SUCCESS:
      return state + 1;
    default:
      return state;
  }
};

export default app;
