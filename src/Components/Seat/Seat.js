import React from 'react'

class Seat extends React.Component {
  constructor () {
    super()
    this.state = {
      number: null,
      hands: [],
      bets: 0,
      status: null
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

  render() {
    return <div className="Seat">
      <h6>SEAT {this.props.number}</h6>
      <form id={`form ${this.state.number}`} onSubmit={this.receiveBet}>
            <label>Bet: </label>
            <input type="number" onChange={this.handleBetChange} />
            <input type="submit" value="Submit" />
          </form>
    </div>
  }
}

export default Seat
