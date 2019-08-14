import React from 'react'

class Player extends React.Component {
  constructor () {
    super()
    this.state = {
      name: null,
      nameSaved: false,
      chips: 5000,
      bet: 50
    }

    this.placeBet = this.placeBet.bind(this)
    this.handleBetChange = this.handleBetChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleNameChange = this.handleNameChange.bind(this)
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

  handleBetChange (event) {
    const proposedBet = event.target.value
    if (proposedBet > 0 && proposedBet <= this.state.chips) {
      this.setState({bet: proposedBet})
    }
  }

  handleNameChange (event) {
    this.setState({
      name: event.target.value
    })
  }

  handleSubmit (event) {
    event.preventDefault()
    this.setState({
      nameSaved: !this.state.nameSaved
    })
  }

  render () {
    return (
      <div className="Player">
        { this.state.nameSaved ? <h5>{ this.state.name }</h5> :
          <form onSubmit={this.handleSubmit}>
            <label>Name: </label>
            <input type="text" onChange={this.handleNameChange}/>
            <input type="submit" value="Save" />
          </form> 
        }
        <p>Chips: {this.state.chips}</p>
        <input type="number" value={this.state.bet} onChange={this.handleBetChange} />
        <button onClick={this.placeBet}>Bet</button>
      </div>
    )
  }
}

export default Player
