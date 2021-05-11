import React from "react";
import "./App.css";

import { connect } from "react-redux";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Logout from "./components/Logout";
import SpellContainer from "./containers/SpellContainer";
import SpellbookContainer from "./containers/SpellbookContainer";
import { getAllSpells } from './actions/spells';

import { BrowserRouter as Router, Route, Switch} from "react-router-dom";



class App extends React.Component {
 
  componentDidMount() {
    this.props.getAllSpells();
  }

  render() {

    let loggedIn=this.props.spellReducer.currentUser.name

    return (
      <div>
        <Router>
          <div className="App">
            <NavBar />
            <h1> Spell Checker</h1>
            <h2>
              <em>A spellbook builder for Dungeons and Dragons 5th Edition</em>
            </h2>

            {loggedIn ? (
              <Logout />
            ) : (
              <div>
                {" "}
                <Login /> <Signup />{" "}
              </div>
            )}

            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/login" component={Login} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    spellReducer: state.spellReducer
  }
}
export default connect(mapStateToProps, {getAllSpells})(App);

