//this should put the front and back together into one flippable card
import React, { Component } from 'react';
import SpellCardBack from './SpellCardBack.js';
import SpellCardFront from './SpellCardFront';

class SpellCard extends React.Component {

  render() {
    return (
      <div className='card-container'>
        <div className='card-body'>
          <SpellCardBack />

          <SpellCardFront />


        </div>
      </div>


    )
  }
}


// ReactDOM.render(<Card />, cardContainer);

export default SpellCard;