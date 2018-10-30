import store from '../../store';

export default function modules(state = store.modules, action) {
  switch (action.type) {
    default:
      return state;
  }
}
