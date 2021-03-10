import { combineReducers } from "redux";

import imagesReducer from "./imagesReducer";
import loadingReducer from "./loadingReducer";

const r = combineReducers({
  images: imagesReducer,
  isLoading:loadingReducer
});

export default r;
