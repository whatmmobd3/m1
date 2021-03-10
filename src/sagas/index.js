import { put, select, call } from "redux-saga/effects";

import { setImages, setError } from "../actions";

import { fetchImages } from "../api";

const getPage = (state) => state.nextPage;
export default function* handleImagesLoad() {
  try {
    const page = yield select(getPage);
    // const page = 3
    const images = yield call(fetchImages, page);
    yield put(setImages(images));
  } catch (error) {
    yield put(setError(error.toString()));
  }
}

