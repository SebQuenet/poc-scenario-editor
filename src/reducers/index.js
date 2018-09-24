import { combineReducers } from 'redux';
import { combineEpics } from 'redux-observable';

import areas, { areasEpic } from './areas';
import places, { placesEpic } from './places';
import modules, { modulesEpic } from './modules';

export const rootEpic = combineEpics(
  areasEpic,
  placesEpic,
  modulesEpic,
);

export const rootReducer = combineReducers({
  areas,
  places,
  modules,
});
