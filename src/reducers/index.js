import { combineReducers } from "redux";

import imagesReducer from "./imagesReducer";
import loadingReducer from "./loadingReducer";
import pageReducer from "./pageReducer";

const r = combineReducers({
  images: imagesReducer,
  isLoading:loadingReducer,
  nextPage:pageReducer
});

export default r;
