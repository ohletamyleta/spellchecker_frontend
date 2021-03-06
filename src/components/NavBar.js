import React from 'react';
import { NavLink } from "react-router-dom";

const link = {
  width: "100px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "black",
  textDecoration: "none",
  color: "white",
}

class NavBar extends React.Component {
  render() {
    return (
      <div>
        <NavLink
          to="/"
          /* set exact so it knows to only set activeStyle when route is deeply equal to link */
          exact
          /* add styling to Navlink */
          style={link}
          /* add prop for activeStyle */
          activeStyle={{
            background: "darkblue",
          }}
        >
          Home
        </NavLink>

        <NavLink
          to="/spells"
          exact
          style={link}
          activeStyle={{
            background: "darkblue",
          }}
        >
          Spells
        </NavLink>
        <NavLink
          to="/spellbook"
          exact
          style={link}
          activeStyle={{
            background: "darkblue",
          }}
        >
          Spellbook
        </NavLink>
      </div>
    );
  }
}

export default NavBar;