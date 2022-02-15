import { configureStore } from '@reduxjs/toolkit';
import todos from './reducer/todoApp/todolist';
import Counter from './reducer/counter/counter';
import apitodolist from './reducer/APItodoApp/todolist';
// import { createStore, applyMiddleware } from 'redux';
// import thunkMiddleware from 'redux-thunk';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import Reducers from './reducer/index';
// const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware));

// const store = createStore(Reducers, composedEnhancer);
// console.log(store.getState());
const store = configureStore({
  reducer: {
    todos: todos,
    Counter: Counter,
    apitodolist: apitodolist,
  },
});
export default store;
