import React, { Component } from 'react';
import SpellCardFront from '../components/SpellCardFront';
import SpellCardBack from '../components/SpellCardBack';

class SpellContainer extends Component {
  state = {
    spells: [],
    casterClass: "",
  };

  // makeSpellCards() {
  //   let spellList = this.state.spells;

  //   if (this.state.casterClass) {
  //     spellList = this.state.spells.filter((spell) =>
  //       spell.dnd_class
  //         .toUpperCase()
  //         .includes(this.state.casterClass.toUpperCase())
  //     );
  //   }

  //   return spellList.map((spell) => (<SpellCardFront name={spell.name} level={spell.level} dnd_class={spell.dnd_class} desc={spell.desc} higher_level={spell.higher_level} 
  //   range={spell.range} components={spell.components} duration={spell.duration} concentration={spell.concentration} casting_time={spell.casting_time} 
  //   school={spell.school} archetype={spell.archetype} circles={spell.circles} />
  //   ));
  

  makeSpellCardsFront() {
    let spellList = this.state.spells;

    if (this.state.casterClass) {
      spellList = this.state.spells.filter((spell) =>
        spell.dnd_class
          .toUpperCase()
          .includes(this.state.casterClass.toUpperCase())
      );
    }

    return spellList.map((spell) => (<SpellCardFront name={spell.name} level={spell.level} dnd_class={spell.dnd_class} desc={spell.desc} higher_level={spell.higher_level}/>
    ));
  }

  // makeSpellCardsBack() {
  //   let spellList = this.state.spells;
  //   // console.log(this.state.spells);
  //   if (this.state.casterClass) {
  //     spellList = this.state.spells.filter((spell) =>
  //       spell.dnd_class
  //         .toUpperCase()
  //         .includes(this.state.casterClass.toUpperCase())
  //     );
  //   }

  //   return spellList.map((spell) => (
  //     <SpellCardBack
  //       name={spell.name}
  //       range={spell.range}
  //       components={spell.components}
  //       duration={spell.duration}
  //       concentration={spell.concentration}
  //       casting_time={spell.casting_time}
  //       School={spell.school}
  //       archetype={spell.archetype}
  //       circles={spell.circles}
  //     />
  //   ));
  // }

  // componentDidMount() {
  //   fetch()
  //     .then((response) => response.json())
  //     .then((data) => {
  //       // console.log(data.results);
  //       this.setState({
  //         spells: data.results,
  //       });
  //       console.log(this.state);
  //     });
  // }

  render() {
    return (
      <div id="spell-container">
        <div>
          <button>Sort By Caster Class Placeholder</button>
        </div>
        {/* {this.makeSpellCards()} */}
        {this.makeSpellCardsFront()}
        {/* {this.makeSpellCardsBack()} */}
      </div>
    );
  }
}

export default SpellContainer;