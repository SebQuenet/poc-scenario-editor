import store from '../../store';

export const placesEpic = $action => $action;

export default function todos(state = store.places, action) {
  switch (action.type) {
    default:
      return state;
  }
}
