//I will render and process the Signup form
//I am a stateful component, yay me!
import React from "react";

class Signup extends React.Component {
  render() {
    return (
      <form>
        <h1>Make some magic!</h1>
        <div>
          <input type="text" name="username" placeholder="Username" />
          <label htmlFor="username">Username</label>
        </div>
        <div>
          <input type="password" name="password" placeholder="Password" />
          <label htmlFor="password">Password</label>
        </div>
        <input type="submit" value="Signup" />
      </form>
    );
  }
}

export default Signup; 