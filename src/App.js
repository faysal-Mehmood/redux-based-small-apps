import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Counter from './app-components/counter-app/index';
import Todolist from './app-components/todoList/index';
import Applist from './app-components/app-list/index';
import Apitodolist from './app-components/todoListApi/index';
import BlogApp from './app-components/blogs-app/index';
import { AddPostForm } from './app-components/blogs-app/addpost';
import logo from './logo.svg';
import './App.css';
import { SinglePostPage } from './app-components/blogs-app/singlepost';
import { EditPostForm } from './app-components/blogs-app/editpost';

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
            <Route path="/blogapp">
              <BlogApp />
            </Route>
            <Route path="/add">
              <AddPostForm />
            </Route>
            <Route path="/posts/:postId">
              <SinglePostPage />
            </Route>
            <Route path="/edit/:postId">
              <EditPostForm />
            </Route>
          </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;
