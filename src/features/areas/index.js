import * as types from './types';

import store from '../../store';
import { watchAreas as areaSagas } from './operations';
import { bindActionCreators } from 'redux';
import { assoc, forEach } from 'ramda';

export default function areas(state = store.areas , action) {
  switch (action.type) {
    case types.FETCHED_AREAS_SUCCESS:
    const newState = { ...state };
      action.payload.forEach(areaData => {
        if (!areaData.places) {
          areaData.places = [];
        }
        newState[areaData._id] = areaData;
      });
      return newState;
    default:
      return state;
  }
};

export { areaSagas };