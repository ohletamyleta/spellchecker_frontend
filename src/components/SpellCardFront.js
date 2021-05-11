//front view of flippable spell card
//will contain Name, desc, higher_level, school logo(later)
//buttons: add to spellbook, flip, remove?

import React from 'react';

function SpellCardFront(props) {
  return (
    <div className="Card-Front">
      <h2>{props.name}</h2>
      Level: {props.level_int}
      Caster Class: {props.dnd_class}
      Description: {props.desc}
      Higher Level: {props.higher_level}
    </div>
  );
}

export default SpellCardFront;