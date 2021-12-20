import { configureStore } from '@reduxjs/toolkit';
import CounterReducer from './reducer/counter';
const store = configureStore({ reducer: CounterReducer });
console.log(store.getState());

export default store;
