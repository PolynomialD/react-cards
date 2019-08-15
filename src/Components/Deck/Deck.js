import React from 'react'

class Deck extends React.Component {
  constructor () {
    super()
    this.state = {
      cards: this.buildCards(),
      image: require("../../assets/images/card_deck.png")
    }
  }

  buildCards () {
    const suits = [['clubs', '♣'], ['diamonds', '♦'], ['hearts', '♥'], ['spades', '♠']]
    const faceValues = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace']
    const cards = suits.map((suit) => {
      return faceValues.map((value, index) => {
        return {
          'name': `${value} of ${suit[0]}`,
          'suit': suit[0],
          'face': value,
          'value': index + 2,
          'icon': suit[1],
          'image': require(`../../assets/images/cards/${value}_of_${suit[0]}.png`)
        }
      })
    })
    return [].concat.apply([], cards)
  }

  render() {
    return <div>
            <img src={this.state.image}></img>
            <img className="card" src={this.state.cards[0].image}></img>
          </div>
  }
}

export default Deck
