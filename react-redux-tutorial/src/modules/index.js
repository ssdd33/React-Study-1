import { combineReducer } from 'redux';
import counter from './counter';
import todos from './todos';

const rootReducer = combineReducer({ counter, todos });

export default rootReducer;
