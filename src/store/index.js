// import { configureStore } from '@reduxjs/toolkit';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import Reducers from './reducer/index';
const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware));

const store = createStore(Reducers, composedEnhancer);
console.log(store.getState());

export default store;
