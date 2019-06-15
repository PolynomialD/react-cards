import React from 'react'

class Player extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      chips: 5000,
      bet: 50
    }

    this.placeBet = this.placeBet.bind(this)
    this.handleBetChange = this.handleBetChange.bind(this)
  }

  placeBet () {
    const newState = {
      chips: this.state.chips - this.state.bet
    }

    this.setState(newState, () => {
      if (this.state.chips < this.state.bet && this.state.chips >= 0){
        this.setState({
          bet: this.state.chips
        })
      }
    })
  }

  handleBetChange (event)  {
    const proposedBet = event.target.value
    if (proposedBet > 0 && proposedBet <= this.state.chips) {
      this.setState({bet: proposedBet})
    }
  }

  render () {
    return (
      <div className="Player">
        <h5>{ this.props.name }</h5>
        <p>Chips: {this.state.chips}</p>
        <input type="number" value={this.state.bet} onChange={this.handleBetChange} />
        <button onClick={this.placeBet}>Bet</button>
      </div>
    )
  }
  
}

export default Player
