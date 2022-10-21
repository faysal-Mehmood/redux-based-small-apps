import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";

import ParentC from "./parent/parentC";
function App() {
  return (
    <div className="App">
      {/* <Layout />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" /> */}
      <Router>
        <Switch>
          <Route exact path="/">
            <ParentC />
          </Route>
        </Switch>
      </Router>
      {/* </header> */}
    </div>
  );
}

export default App;
