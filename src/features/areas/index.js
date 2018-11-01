import store from '../../store';
import { watchAreas as areaSagas } from './operations';

export default function areas(state = store.areas , action) {
  switch (action.type) {
    default:
      return state;
  }
};

export { areaSagas };