import React from 'react'
import Player from '../Player/Player'
import Deck from '../Deck/Deck'
import { Button } from 'react-bootstrap'

class Game extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      started: false,
      dealtCards: [[],[],[],[],[],[]],
      currentSeat: 1
    }

    this.receiveCard = this.receiveCard.bind(this)
    this.changeSeat = this.changeSeat.bind(this)
    this.giveCards= this.giveCards.bind(this)
  }

  receiveCard(card) {
    const newArray = this.state.dealtCards.slice()
    newArray[this.state.currentSeat-1].push(card)
    this.setState({
      dealtCards: newArray
    })
    return card
  }

  changeSeat() {
    this.setState({
      currentSeat: this.state.currentSeat < 6 ? this.state.currentSeat += 1 : 1
    })
  }

  giveCards() {
    return this.state.dealtCards
  }

  render() {
    return (
      <div className="game">
        <Deck dealCard={this.receiveCard} />
        <Button variant="outline-success" onClick={this.changeSeat}>Change Seat</Button>
        <Player getCards={this.giveCards()} />
      </div>
    )
  }
  
}

export default Game
