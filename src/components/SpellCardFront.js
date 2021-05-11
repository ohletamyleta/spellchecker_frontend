//front view of flippable spell card
//will contain Name, desc, higher_level, school logo(later)
//buttons: add to spellbook, flip, remove?
//will need access to state to monitor whether it is in the spellbook or not!!!!!

import React, { Component } from 'react';

class SpellCardFront extends Component {

  constructor(props) {
    super(props);

    this.state = { added: false }
  }

  clickHandler = () => {
    this.setState(state => ({
      added: !state.added
    }));
  }

  render() {
    return (
      <h4>working on it...</h4>
    )
  }

}

// function SpellCardFront(props) {
//   return (
//     <div className="Card-Front">
//       <h2>{props.name}</h2>
//       Level: {props.level_int}
//       Caster Class: {props.dnd_class}
//       Description: {props.desc}
//       Higher Level: {props.higher_level}
//     </div>
//   );
// }

export default SpellCardFront;