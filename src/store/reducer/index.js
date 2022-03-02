import { combineReducers } from 'redux';
import Counter from './counter/counter';
import todos from './todoApp/todolist';
import apitodolist from './APItodoApp/todolist';
import posts from './posts/post';
export default combineReducers({
  Counter,
  todos,
  apitodolist,
  posts,
});
