import React from 'react'

class Deck extends React.Component {
  constructor () {
    super()
    this.state = {
      suits: [['clubs', '♣'], ['diamonds', '♦'], ['hearts', '♥'], ['spades', '♠']],
      suitIcons: ['♣', '♦', '♥', '♠'],
      faceValues: ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'],
      cards: this.buildCards()
    }
  }

  buildCards () {
    const cards = this.suits.map((suit) => {
      return this.faceValues.map((value, index) => {
        return {
          'name': `${value} of ${suit}`,
          'suit': suit[0],
          'face': value,
          'value': index + 2,
          'icon': suit[1],
          'image': `../assets/cards/${value} of ${suit}.png`
        }
      })
    })
    return [].concat.apply([], cards)
  }

  render() {
    
  }
}

export default Deck
