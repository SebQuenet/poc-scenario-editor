import * as actions from './types';

export const fetchFactionsForArea= areaId => ({
  type: actions.FETCH_FACTIONS,
  payload: areaId,
});

export const fetchedFactionsSuccess = response => ({
  type: actions.FETCHED_FACTIONS_SUCCESS,
  payload: response,
});

export const fetchedFactionsFailure = error => ({
  type: actions.FETCHED_FACTIONS_FAILURE,
  payload: error,
});

export const upsertFactionForArea = (data, areaId) => ({
  type: actions.UPSERT_FACTION,
  payload: {
    data,
    areaId,
  },
});

export const upsertedFactionSuccess = response => ({
  type: actions.UPSERTED_FACTION_SUCCESS,
  payload: response,
});

export const upsertedFactionFailure = error => ({
  type: actions.UPSERTED_FACTION_FAILURE,
  payload: error,
});