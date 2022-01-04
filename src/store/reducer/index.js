import { combineReducers } from 'redux';
import Counter from './counter/counter';
import todos from './todoApp/todolist';

export default combineReducers({
  Counter,
  todos,
});
