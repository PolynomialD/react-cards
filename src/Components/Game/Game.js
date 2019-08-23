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
      currentSeat: 1,
      numberOfSeats: 0
    }

    this.receiveCard = this.receiveCard.bind(this)
    this.changeSeat = this.changeSeat.bind(this)
    this.addSeatToCount = this.addSeatToCount.bind(this)
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
      currentSeat: this.state.currentSeat < this.state.numberOfSeats ? this.state.currentSeat += 1 : 1
    })
  }

  addSeatToCount() {
    this.setState({
      numberOfSeats: this.state.numberOfSeats += 1
    })
  }

  render() {
    return (
      <div className="game">
        Seats: {this.state.numberOfSeats}
        Current Seat: {this.state.currentSeat}
        <Deck dealCard={this.receiveCard} />
        <Button variant="outline-success" onClick={this.changeSeat}>Change Seat</Button>
        <Player cards={this.state.dealtCards}
                addSeatToCount={this.addSeatToCount}
        />
      </div>
    )
  }
  
}

export default Game
