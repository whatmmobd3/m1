import { combineReducers } from "redux";

import imagesReducer from "./imagesReducer";

const r = combineReducers({
  images: imagesReducer,
});

export default r;
