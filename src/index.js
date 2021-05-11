import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from "./components/Home";
import Signup from "./components/Signup";
import Login from "./components/Login";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SpellContainer from './containers/SpellContainer'
import SpellbookContainer from './containers/SpellbookContainer'
import NavBar from './components/NavBar'

ReactDOM.render((
  <Router>
    <App />
    <NavBar />
      <Route exact path="/" component={Home} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/login" component={Login} />
    <SpellContainer />
    <SpellbookContainer />
  </Router>),
  document.getElementById('root')
);

