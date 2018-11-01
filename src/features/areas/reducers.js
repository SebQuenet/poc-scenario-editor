import { FETCHED_AREAS_SUCCESS, FETCHED_AREAS_FAILURE } from './types';

const initialState = [];

export default ( state = initialState, action ) => {
  switch (action.type) {
    case FETCHED_AREAS_SUCCESS:
      return [...state, ...action.payload];
    default:
      return state;
  }
};
