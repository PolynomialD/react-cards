import React from 'react'
import Player from './Player'

class Game extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      started: false
    }
  }

  render () {
    const startStop = () => {
      this.setState({
        started: !this.state.started
      })
    }

    return (
      <div className="game">
        <Player name="Ste" />
        <Player name="Kev" />
        <button onClick={startStop}>start/stop</button>
        Game { this.state.started ? 'is running' : 'is stopped' }
      </div>
    )
  }
  
}

export default Game
