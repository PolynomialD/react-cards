import React from 'react'
import Player from '../Player/Player'

class Game extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      started: false
    }
  }

  render () {
    return (
      <div className="game">
        <Player />
      </div>
    )
  }
  
}

export default Game
