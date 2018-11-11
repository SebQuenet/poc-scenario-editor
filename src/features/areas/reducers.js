import { FETCHED_AREAS_SUCCESS, FETCHED_AREAS_FAILURE } from './types';
import store from '../../store';

export default function areas(state = store.areas , action) {
  switch (action.type) {

    case FETCHED_AREAS_SUCCESS:
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
