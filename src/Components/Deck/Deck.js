import React from 'react'
import './Deck.css'

class Deck extends React.Component {
  constructor () {
    super()
    this.state = {
      cards: this.buildCards(),
      image: require("../../assets/images/card_deck.png"),
      dealtCards: [],
      cardBack: require('../../assets/images/card_backs/card_back_red.png')
    }
    this.shuffle = this.shuffle.bind(this)
    this.recursiveShuffle = this.recursiveShuffle.bind(this)
    this.dealCard = this.dealCard.bind(this)
  }

  buildCards () {
    const suits = [['clubs', '♣'], ['diamonds', '♦'], ['hearts', '♥'], ['spades', '♠']]
    const values = [['2', 2],['3',3],['4', 4],['5', 5],['6', 6],['7', 7],['8', 8],['9', 9],['10', 10],['jack', 10],['queen', 10],['king', 10],['ace', 11]]
    const cards = suits.map((suit) => {
      return values.map((value) => {
        return {
          name: `${value[0]} of ${suit[0]}`,
          suit: suit[0],
          face: value[0],
          value: value[1],
          icon: suit[1],
          image: require(`../../assets/images/cards/${value[0]}_of_${suit[0]}.png`)
        }
      })
    })
    return [].concat.apply([], cards)
  }

  dealCard () {
    this.setState({
      dealtCards: [this.state.cards[0]].concat(this.state.dealtCards)
    })
    return this.state.cards.shift()
  }

  shuffle () {
    this.setState({
      cards: this.recursiveShuffle(this.state.cards)
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
    const dealtCardSrc = (this.state.dealtCards.length === 0) ? this.state.cardBack : this.state.dealtCards[0].image
    return <div>
            <button onClick={this.shuffle}>SHUFFLE</button>
            <button onClick={this.dealCard}>DEAL</button>
            <img className="Deck" src={this.state.image}></img>
            <img className="Card" src={this.state.cards[0].image}></img>
            {this.state.cards[0].value}
            {this.state.cards[0].icon}
            <img className="Card" src={dealtCardSrc}></img>
          </div>
  }
}

export default Deck
