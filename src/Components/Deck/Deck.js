import React from 'react'
import './Deck.css'

class Deck extends React.Component {
  constructor () {
    super()
    this.state = {
      cards: this.buildCards(),
      image: require("../../assets/images/card_deck.png")
    }
    this.recursiveShuffle = this.recursiveShuffle.bind(this)
    this.shuffle = this.shuffle.bind(this)
  }

  buildCards () {
    const suits = [['clubs', '♣'], ['diamonds', '♦'], ['hearts', '♥'], ['spades', '♠']]
    const faceValues = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace']
    const cards = suits.map((suit) => {
      return faceValues.map((value, index) => {
        return {
          name: `${value} of ${suit[0]}`,
          suit: suit[0],
          face: value,
          value: index + 2,
          icon: suit[1],
          image: require(`../../assets/images/cards/${value}_of_${suit[0]}.png`)
        }
      })
    })
    return [].concat.apply([], cards)
  }

  shuffle () {
    const shuffled = this.recursiveShuffle(this.state.cards)
    this.setState({
      cards: shuffled
    })
    
  }

  recursiveShuffle (deck, i = 1, limit = 200) {
    const clone = deck.slice(0)

    const newDeck = new Array(clone.length).fill(0).map(() => {
        return clone.splice(Math.floor(Math.random() * Math.floor(clone.length)),1)[0]
    })  
    return (i < limit) ? this.recursiveShuffle(newDeck, ++i) : newDeck
  }

  render() {
    return <div>
      <button onClick={this.shuffle}></button>
      {this.state.cards[0].icon}
            <img className="Deck" src={this.state.image}></img>
            <img className="Card" src={this.state.cards[0].image}></img>
          </div>
  }
}

export default Deck
