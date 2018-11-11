import { takeEvery, put } from 'redux-saga/effects';
import * as actions from './actions';
import * as types from './types';
import axios from 'axios';

export function* fetchAreaSaga({payload: areaId}) {
  try {
    const areaData = yield axios.get(`http://127.0.0.1:3142/areas/${areaId}`);
    yield put(actions.fetchAreaSuccess(areaData.data));
/*    const NPCsData = yield axios.get(`http://127.0.0.1:3142/areas/${areaId}/npcs`);
    yield put(actions.fetchAreaSuccess(NPCsData.data));
    const factionsData = yield axios.get(`http://127.0.0.1:3142/areas/${areaId}/factions`);
    yield put(actions.fetchAreaSuccess(factionsData.data));
    const placesData = yield axios.get(`http://127.0.0.1:3142/areas/${areaId}/places`);
    yield put(actions.fetchAreaSuccess(placesData.data));
    const modulesData = yield axios.get(`http://127.0.0.1:3142/areas/${areaId}/modules`);
    yield put(actions.fetchAreaSuccess(modulesData.data));*/
  } catch(error) {
    yield put(actions.fetchAreaFailure(error));
  }
}

export function* watchAreas() {
  yield takeEvery(types.FETCH_AREA, fetchAreaSaga);
}