import * as actions from './types';

export const fetchAreas = () => ({
  type: actions.FETCH_AREAS,
});

export const fetchAreasSuccess = (data) => ({
  type: actions.FETCHED_AREAS_SUCCESS,
  payload: data,
});

export const fetchAreasFailure = (error) => ({
  type: actions.FETCHED_AREAS_FAILURE,
  payload: error,
});