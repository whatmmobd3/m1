import { combineReducers } from "redux";

import imagesReducer from "./imagesReducer";
import loadingReducer from "./loadingReducer";
import pageReducer from "./pageReducer";
import statsReducer from "./statsReducer";

const r = combineReducers({
  images: imagesReducer,
  isLoading:loadingReducer,
  nextPage:pageReducer,
  imageStats:statsReducer
});

export default r;
