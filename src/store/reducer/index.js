import { combineReducers } from 'redux';
import Counter from './counter/counter';
import todos from './todoApp/todolist';
import apitodolist from './APItodoApp/todolist';
export default combineReducers({
  Counter,
  todos,
  apitodolist,
});
