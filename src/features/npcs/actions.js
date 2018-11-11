import * as actions from './types';

export const fetchNPCsForArea= (areaId) => ({
  type: actions.FETCH_NPCS,
  payload: areaId,
});

export const fetchNPCsSuccess= (data) => ({
  type: actions.FETCHED_NPCS_SUCCESS,
  payload: data,
});

export const fetchNPCsFailure= (error) => ({
  type: actions.FETCHED_NPCS_FAILURE,
  payload: error,
});

export const addNPCToArea= (areaId, NPCId) => ({
  type: actions.ADD_NPC,
  payload: {areaId, NPCId},
});

export const addNPCSuccess = (data) => ({
  type: actions.ADDED_NPC_SUCCESS,
  payload: data,
});

export const addNPCFailure = (error) => ({
  type: actions.ADDED_NPC_FAILURE,
  payload: error,
});
