import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';

import * as types from './types';
import * as actions from './actions';

export function* fetchFactionsForAreaSaga({payload: areaId}) {
  try {
    const factionsData = yield axios.get(`http://127.0.0.1:3142/areas/${areaId}/factions`);
    yield put(actions.fetchedFactionsSuccess(factionsData.data));
  } catch(error) {
    yield put(actions.fetchedFactionsFailure(error));
  }
}

export function* upsertFactionForAreaSaga(factionAction) {
  try {
    const factionFormData = new FormData();

    Object.entries(factionAction.payload.data).forEach((kv) => factionFormData.append(kv[0], kv[1]));

    const response = yield axios({
      method: 'POST', 
      url: `http://127.0.0.1:3142/areas/${factionAction.payload.areaId}/factions/upsert`,
      data: factionFormData,
      config: {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
    });

    yield put(actions.upsertedFactionSuccess(response.data));
  } catch(error) {
    yield put(actions.upsertedFactionFailure(error));
  }

}


export function* watchFactions() {
  yield takeEvery(types.FETCH_FACTIONS, fetchFactionsForAreaSaga);
  yield takeEvery(types.UPSERT_FACTION, upsertFactionForAreaSaga);
}