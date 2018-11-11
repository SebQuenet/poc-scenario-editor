import { FETCHED_FACTIONS_SUCCESS, FETCHED_FACTIONS_FAILURE } from './types';

export default function factions(state = [], action) {
  switch (action.type) {
    case FETCHED_FACTIONS_SUCCESS:
      const newState = [...action.payload];
      return newState;
      
    default:
      return state;
  }
};
