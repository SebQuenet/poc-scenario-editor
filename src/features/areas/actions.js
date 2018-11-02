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

export const addArea = () => ({
  type: actions.ADD_AREA,
});

export const addAreaSuccess = (data) => ({
  type: actions.ADDED_AREA_SUCCESS,
  payload: data,
});

export const addAreaFailure = (error) => ({
  type: actions.ADDED_AREA_FAILURE,
  payload: error,
});