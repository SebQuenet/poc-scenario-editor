import { FETCHED_NPCS_SUCCESS, FETCHED_NPCS_FAILURE } from './types';
import store from '../../store';

export default function npcs(state = [], action) {
  switch (action.type) {

    case FETCHED_NPCS_SUCCESS:
      return action.payload;
      
    default:
      return state;
  }
};
