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

export function* addAreaSaga(areaDataAction) {
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
    yield put(actions.addAreaSuccess({
      requestData: areaDataAction.payload,
      responseData: response.data,
    }));
  } catch(error) {
    yield put(actions.addAreaFailure(error));
  }
}

export function* watchAreas() {
  yield takeEvery(types.FETCH_AREAS, fetchAreasSaga);
  yield takeEvery(types.ADD_AREA, addAreaSaga);
}