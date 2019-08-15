import React from 'react'
import Player from '../Player/Player'
import Seat from '../Seat/Seat'
import Deck from '../Deck/Deck'

class Game extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      started: false
    }
  }

  renderSeat(i) {
    return <Seat number={i} />
  }

  render() {
    return (
      <div className="game">
        <Deck />
        {this.renderSeat(6)}
        {this.renderSeat(5)}
        {this.renderSeat(4)}
        {this.renderSeat(3)}
        {this.renderSeat(2)}
        {this.renderSeat(1)}
        <Player />
      </div>
    )
  }
  
}

export default Game
