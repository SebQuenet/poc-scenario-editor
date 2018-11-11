import * as types from './types';
import * as actions from './actions';

import { watchAreas as areaSagas } from './operations';
import reducers from './reducers';

export default reducers;
export { types };
export { actions };
export { areaSagas };
