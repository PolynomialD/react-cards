import React from 'react'

class Seat extends React.Component {
  constructor () {
    super()
    this.state = {
      number: null,
      hands: [],
      bets: 0,
      status: 'empty'
    }
    this.receiveBet = this.receiveBet.bind(this)
    this.handleBetChange = this.handleBetChange.bind(this)
  }

  receiveHand(hand) {
    this.hands.push(hand)
  }

  receiveBet(event) {
    event.preventDefault()
    this.setState({
      status: 'bet received'
    })
  }

  handleBetChange (event) {
    const proposedBet = event.target.value
    if (proposedBet > 0) {
      this.setState({bets: proposedBet})
    }
  }

  setNumber(num) {
    this.setState({
      number: num
    })
  }

  render() {
    return <div className="Seat">
      <h6>SEAT {this.props.number}</h6>
      { this.state.status === 'empty' ?
      <form id={`form ${this.state.number}`} onSubmit={this.receiveBet}>
        <label>Bet: </label>
        <input type="number" onChange={this.handleBetChange} />
        <input type="submit" value="Submit" />
      </form> : <h6>BET {this.state.bets}</h6>
      }
    </div>
  }
}

export default Seat
