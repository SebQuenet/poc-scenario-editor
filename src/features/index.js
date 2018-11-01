import { combineReducers } from 'redux';
import { call, all } from 'redux-saga/effects';
import areas, { areaSagas } from './areas';
import places from './places';
import modules from './modules';

export const rootReducer = combineReducers({
  areas,
  places,
  modules,
});

export function* rootSaga() {
  yield all([
    call(areaSagas),
  ]);
}
