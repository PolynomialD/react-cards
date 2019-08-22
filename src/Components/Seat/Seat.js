import React from 'react'
import { Col, Form } from 'react-bootstrap'

class Seat extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      number: null,
      chips: 0,
      bet: 0,
      status: 'no-chips',
      cards: this.props.getCards
    }
    this.receiveBet = this.receiveBet.bind(this)
    this.receiveDeposit = this.receiveDeposit.bind(this)
    this.handleBetChange = this.handleBetChange.bind(this)
    this.handleChipDeposit = this.handleChipDeposit.bind(this)
  }

  receiveBet(event) {
    event.preventDefault()
    this.setState({
      status: 'bet-received',
      chips: this.state.chips - this.state.bet
    })
    this.props.sendStatus('bet-received')
  }

  receiveDeposit(event) {
    event.preventDefault()
    this.props.setter(this.props.getter() - this.state.chips)
    this.setState({
      status: 'betting'
    })
  }

  handleBetChange (event) {
    const proposedBet = event.target.value
    if (proposedBet > 0) {
      this.setState({
        bet: proposedBet
      })
    }
  }

  handleChipDeposit (event) {
    const proposedChange = event.target.value
    if (proposedChange > 0) {
      this.setState({chips: proposedChange})
    }
  }

  render() {
    return <Col md="2" className="Seat">
      {this.state.cards}
      { this.state.status === 'no-chips' ?
        <>
          Add Chips
          <Form onSubmit={this.receiveDeposit}>
            <Form.Control type="number" step="500" onChange={this.handleChipDeposit} />
            <Form.Control className="btn btn-warning" type="submit" value="Deposit" />
          </Form>
        </>
        : this.state.status === 'betting' ?
          <Form onSubmit={this.receiveBet}>
            <Form.Control type="number" onChange={this.handleBetChange} />
            <Form.Control className="btn btn-success" type="submit" value="Bet" />
            <label>Bet: </label>
          </Form> 
        : this.state.status === 'bet-received' ?
          <>
            <h6>BET {this.state.bet}</h6>
          </>
        : <></>
      }
      <h6>SEAT {this.props.number}</h6>
      <h6>CHIPS {this.state.chips}</h6>
    </Col>
  }
}

export default Seat
