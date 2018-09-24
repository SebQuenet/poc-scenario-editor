import store from '../../store';

export const areasEpic = action$ => action$;

export default function areas(state = store.areas, action) {
  switch (action.type) {
    default:
      return state;
  }
};