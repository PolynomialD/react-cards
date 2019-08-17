import React from 'react'
import Seat from '../Seat/Seat.js'
import { Row, Col, Container, Button, Form } from 'react-bootstrap'

class Player extends React.Component {
  constructor () {
    super()
    this.state = {
      name: 'player1',
      nameSaved: false,
      chips: 5000,
      proposedDeposit: 50,
      seats: []
    }

    this.confirmDeposit = this.confirmDeposit.bind(this)
    this.handleDeposit = this.handleDeposit.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleNameChange = this.handleNameChange.bind(this)
    this.renderSeat = this.renderSeat.bind(this)
    this.addSeat = this.addSeat.bind(this)
    this.getChips = this.getChips.bind(this)
    this.setChips = this.setChips.bind(this)
  }

  confirmBet () {
    const newState = {
      chips: this.state.chips + this.state.bet
    }

    this.setState(newState, () => {
      if (this.state.chips < this.state.bet && this.state.chips >= 0){
        this.setState({
          bet: this.state.chips
        })
      }
    })
  }

  confirmDeposit () {
    this.setState({
      chips: this.state.chips + this.state.proposedDeposit
    })
  }

  handleDeposit (event) {
    const proposedBet = Number(event.target.value)
    if (proposedBet > 0) {
      this.setState({proposedDeposit: proposedBet})
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

  getChips() {
    return this.state.chips
  }

  setChips(chips) {
    this.setState({
      chips: chips
    })
  }

  addSeat() {
    const seatNumber = this.state.seats.length + 1
    if(seatNumber <= 6) {
      this.setState({
        seats: this.state.seats.concat([<Seat getter={this.getChips} setter={this.setChips} number={seatNumber} />])
      })
    }
  }

  renderSeat(i) {
    return this.state.seats[i]
  }

  render () {
    return (
      <Container>
        <Row className="mt-5">
          { this.state.seats }
        </Row>
        <Container className="border border-primary rounded p-3 mt-5">
          <Row>
            <Col >
              { this.state.nameSaved ? <h5>{ this.state.name }</h5> :
                <Form onSubmit={this.handleSubmit}>
                  {/* <Form.Label>Name: </Form.Label> */}
                  <Form.Control type="text" onChange={this.handleNameChange} placeholder="Player1" />
                  <Form.Control type="submit" value="Set Name" className=" btn btn-success" />
                </Form>
              }
              <h5>Chips: {this.state.chips}</h5>
            </Col>
          </Row>
          <Row className="mt-2">
            <Col>
              <Button variant="outline-success" onClick={this.addSeat}>Add Seat</Button>
            </Col>
            <Col>
              <Form.Control type="number" onChange={this.handleDeposit} />
              <Button type="button" onClick={this.confirmDeposit}>Deposit</Button>
            </Col>
          </Row>
        </Container>
      </Container>
    )
  }
}

export default Player
