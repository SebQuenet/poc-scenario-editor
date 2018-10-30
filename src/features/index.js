import { combineReducers } from 'redux';

import areas from './areas';
import places from './places';
import modules from './modules';

export const rootReducer = combineReducers({
  areas,
  places,
  modules,
});
