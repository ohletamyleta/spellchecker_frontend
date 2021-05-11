import React from "react";
import "./App.css";

import { connect } from "react-redux";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Signup from "./components/Signup";
import Login from "./components/Login";
import SpellContainer from "./containers/SpellContainer";
import SpellbookContainer from "./containers/SpellbookContainer";

import { BrowserRouter as Router, Route } from "react-router-dom";



class App extends React.Component {
  componentDidMount() {
    this.props.getAllSpells();
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <h1> Spell Checker</h1>
        <h2>
          <em>A spellbook builder for Dungeons and Dragons 5th Edition</em>
        </h2>
     
      
     
     
     
     </div>
    );
  }
}
export default App;

