import { takeEvery, put } from 'redux-saga/effects';
import * as actions from './actions';
import * as types from './types';
import axios from 'axios';

export function* fetchAreasSaga() {
  try {
    const response = yield axios.get('http://127.0.0.1:3142/areas');
    yield put(actions.fetchAreasSuccess(response.data));
  } catch(error) {
    yield put(actions.fetchAreasFailure(error));
  }
}

export function* addAreasSaga(areaData) {
  try {
    const response = yield axios.post('http://127.0.0.1:3142/areas/create', areaData);
    yield put(actions.addAreaSuccess(response.data));
  } catch(error) {
    yield put(actions.addAreaFailure(error));
  }
}
export function* watchAreas() {
  yield takeEvery(types.FETCH_AREAS, fetchAreasSaga);
  yield takeEvery(types.ADD_AREA, fetchAreasSaga);
}