import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import './api/server';
import store from './store';
import { fetchTodos } from './store/actions/apitodolist';
import {fetchUsers} from './store/reducer/ApiPost/user';

import { worker } from './blogapi/server'

// Start our mock API server
worker.start({ onUnhandledRequest: 'bypass' })

store.dispatch(fetchUsers())
store.dispatch(fetchTodos);
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
