import React from 'react';
import { NavLink } from "react-router-dom";

const link = {
  width: "100px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "black",
  textDecoration: "none",
  color: "white",
};

class Home extends React.Component {
  render() {
    return (
      <div>


        <NavLink
          to="/login"
          exact
          style={link}
          activeStyle={{
            background: "darkblue",
          }}
        >
          Login
        </NavLink>
        <NavLink
          to="/signup"
          exact
          style={link}
          activeStyle={{
            background: "darkblue",
          }}
          >
        Signup
        </NavLink>
      </div>
    );
  }
}

export default Home; 