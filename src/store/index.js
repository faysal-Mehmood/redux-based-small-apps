import { configureStore } from '@reduxjs/toolkit';
import Reducers from './reducer/index';
const store = configureStore({ reducer: Reducers });
console.log(store.getState());

export default store;
