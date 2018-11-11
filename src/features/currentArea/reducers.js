import { FETCHED_AREA_SUCCESS, FETCHED_AREA_FAILURE } from './types';

const initialState = {};

export default ( state = initialState, action ) => {
  switch (action.type) {

    case FETCHED_AREA_SUCCESS:
      return {
        ...state,
        ...action.payload
      };

    default:
      return state;
  }
};
