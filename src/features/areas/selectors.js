import { createSelector  } from 'reselect';

const getArea = (state, props) => state.areas[props.currentAreaId];
const getPlaces = (state, props) => state.places.filter(area => props.currentAreaId);

const getAreaWithPlaces = createSelector([getArea, getPlaces], (area, place) => {

});

export default getAreaWithPlaces;