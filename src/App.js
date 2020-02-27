import React from 'react';
import './App.css';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import Todo from './components/todo';
import Users from './components/users';


function App() {
  return (
    <Router>
      <div>
        <ul className="header nav nav-tabs">
          <li className="nav active"><Link to="/">Todo</Link></li>
          <li className="nav"><Link to="/users">Users</Link></li>
        </ul>
        <div className="content">
          <Route exact path="/" component={Todo} />
          <Route path="/users" component={Users} />
        </div>
      </div>
    </Router>
  );
}

export default App;
