import { combineReducers } from 'redux';
import user from './user';
import runtime from './runtime';
import counter from './counter';

export default combineReducers({
  user,
  runtime,
  counter
});
