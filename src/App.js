import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import logo from './logo.svg';
import './App.css';

function App() {
  // const count = useSelector(value);
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
          <span>clicked by 2 times</span>
          <button>-</button>
          <button>+</button>
          <button>inscrement if odd</button>
          <button>increment async</button>
        </p>
      </header>
    </div>
  );
}

export default App;
