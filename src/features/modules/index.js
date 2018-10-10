import store from '../../store';

export const modulesEpic = $action => $action;

export default function modules(state = store.modules, action) {
  switch (action.type) {
    default:
      return state;
  }
}
