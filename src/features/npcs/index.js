import * as types from './types';
import * as actions from './actions';

import { watchNPCs as NPCsSagas } from './operations';
import reducers from './reducers';

export default reducers;
export { types };
export { actions };
export { NPCsSagas };