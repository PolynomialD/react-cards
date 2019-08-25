import React from 'react'
import Card from '../Cards/Cards.js'
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
      return values.map((value, index) => {
        return <Card
          key={index}
          name={`${value[0]} of ${suit[0]}`}
          suit={suit[0]}
          face={value[0]}
          value={value[1]}
          icon={suit[1]}
          image={require(`../../assets/images/cards/${value[0]}_of_${suit[0]}.png`)}
        />
      })
    })
    return [].concat.apply([], cards)
  }

  dealCard () {
    this.setState({
      dealtCards: [this.state.cards[0]].concat(this.state.dealtCards)
    })
    this.props.dealCard(this.state.cards.shift())
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
    return <div>
            <button onClick={this.shuffle}>SHUFFLE</button>
            <img className="Deck" type="button" src={this.state.image} alt="" onClick={this.dealCard} ></img>
            { this.state.cards[0] }
            {this.state.cards[0].props.value}
            {this.state.cards[0].props.icon}
            Dealt: { this.state.dealtCards }
          </div>
  }
}

export default Deck
