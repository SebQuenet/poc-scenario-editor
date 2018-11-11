import * as actions from './types';

export const fetchArea = (areaId) => ({
  type: actions.FETCH_AREA,
  payload: areaId
});

export const fetchAreaSuccess = (data) => ({
  type: actions.FETCHED_AREA_SUCCESS,
  payload: data,
});

export const fetchAreaFailure = (error) => ({
  type: actions.FETCHED_AREA_FAILURE,
  payload: error,
});
