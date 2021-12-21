import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from './store/actions/counter';
import { incrementIfOdd } from './store/reducer/counter/counter';
import logo from './logo.svg';
import './App.css';

function App() {
  const count = useSelector((state) => state.Counter.value);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>
          <span>clicked by {count} times</span>
          <button onClick={() => dispatch(decrement())}>-</button>
          <button onClick={() => dispatch(increment())}>+</button>
          <button onClick={() => dispatch(incrementIfOdd())}>
            inscrement if odd
          </button>
          <button>increment async</button>
        </p>
      </header>
    </div>
  );
}

export default App;
