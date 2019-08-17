import React from 'react'
import Player from '../Player/Player'
import Deck from '../Deck/Deck'

class Game extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      started: false
    }
  }

  render() {
    return (
      <div className="game">
        <Deck />
        <Player />
      </div>
    )
  }
  
}

export default Game
