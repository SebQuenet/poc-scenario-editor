import { takeEvery, put } from 'redux-saga/effects';
import * as actions from './actions';
import * as types from './types';
import axios from 'axios';

export function* fetchNPCsSaga(fetchNPCsAction) {
  console.log(fetchNPCsAction);
  try {
    const response = yield axios.get('http://127.0.0.1:3142/npcs');
    yield put(actions.fetchNPCsSuccess(response.data));
  } catch(error) {
    yield put(actions.fetchNPCsFailure(error));
  }
}

export function* addNPCSaga(npcDataAction) {
  console.log(npcDataAction);
  /*
  try {
    const areaFormData = new FormData();

    Object.entries(areaDataAction.payload).forEach((kv) => areaFormData.append(kv[0], kv[1]));
    
    const response = yield axios({
      method: 'POST', 
      url: 'http://127.0.0.1:3142/areas/upsert',
      data: areaFormData,
      config: {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
    });
    yield put(actions.addNPCSuccess({
      requestData: areaDataAction.payload,
      responseData: response.data,
    }));
  } catch(error) {
    yield put(actions.addAreaFailure(error));
  }*/
}

export function* watchNPCs() {
  yield takeEvery(types.FETCH_NPCS, fetchNPCsSaga);
  yield takeEvery(types.ADD_NPC, addNPCSaga);
}