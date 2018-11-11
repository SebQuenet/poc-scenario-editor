import { combineReducers } from 'redux';
import { call, all } from 'redux-saga/effects';

import areas, { areaSagas } from './areas';
import NPCs, { NPCsSagas } from './npcs';
import currentArea, { currentAreaSagas } from './currentArea';
import factions, { factionsSagas } from './factions';

import places from './places';
import modules from './modules';

export const rootReducer = combineReducers({
  areas,
  currentArea,
  factions,
  NPCs,
  places,
  modules,
});

export function* rootSaga() {
  yield all([
    call(areaSagas),
    call(currentAreaSagas),
    call(factionsSagas),
    call(NPCsSagas),
  ]);
}
