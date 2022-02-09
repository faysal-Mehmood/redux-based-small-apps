import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Counter from './app-components/counter-app/index';
import Todolist from './app-components/todoList/index';
import Applist from './app-components/app-list/index';
import Apitodolist from './app-components/todoListApi/index';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Router>
          <Switch>
            <Route exact path="/">
              <Applist />
            </Route>
            <Route path="/counter">
              <Counter />
            </Route>
            <Route path="/todolist">
              <Todolist />
            </Route>
            <Route path="/apitodolist">
              <Apitodolist />
            </Route>
          </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;
