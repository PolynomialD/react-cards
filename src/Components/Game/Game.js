import React from 'react'
import Player from '../Player/Player'
import Deck from '../Deck/Deck'

class Game extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      started: false,
      dealtCards: []
    }

    this.receiveCard = this.receiveCard.bind(this)
  }

  receiveCard(card) {
    this.setState({
      dealtCards: [card].concat(this.state.dealtCards)
    })
    return card
  }

  render() {
    return (
      <div className="game">
        <Deck dealCard={this.receiveCard} />
        <Player cards={this.state.dealtCards} />
      </div>
    )
  }
  
}

export default Game
