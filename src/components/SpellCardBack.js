//back view of flippable spell card
//will contain stats not included on front
//buttons: add to spellbook, flip
import React from 'react';

function SpellCardBack(props) {
  return (
    <div className="Card-Back">
      <h2>{props.name}</h2>
      Range: {props.range}
      Components: {props.components}
      Duration: {props.duration}
      Concentration: {props.concentration}
      Casting Time: {props.casting_time}
      School: {props.school}
      Archetype: {props.archetype}
      Circles: {props.circles}
    </div>
  );
}

export default SpellCardBack;