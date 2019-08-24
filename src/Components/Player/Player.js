import React from 'react'
import Seat from '../Seat/Seat.js'
import { Row, Col, Container, Button, Form, Navbar, Image } from 'react-bootstrap'

class Player extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'player1',
      nameSaved: false,
      chips: 5000,
      proposedDeposit: 50,
      seats: [],
      betCount: 0,
      status: null,
      cards: this.props.cards
    }

    this.confirmDeposit = this.confirmDeposit.bind(this)
    this.handleDeposit = this.handleDeposit.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleNameChange = this.handleNameChange.bind(this)
    this.addSeat = this.addSeat.bind(this)
    this.getChips = this.getChips.bind(this)
    this.setChips = this.setChips.bind(this)
    this.increaseBetCount = this.increaseBetCount.bind(this)
    this.giveCards = this.giveCards.bind(this)
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
        seats: this.state.seats.concat(
        [<Seat getter={this.getChips}
               setter={this.setChips}
               number={seatNumber}
               sendStatus={this.increaseBetCount}
               playerStatus={this.state.status}
               cards={this.giveCards(seatNumber-1)}
               key={seatNumber}
        />]),
        status: 'betting'
      })
      this.props.addSeatToCount()
    }
  }

  increaseBetCount() {
    this.setState({
      betCount: this.state.betCount + 1
    })
  }

  setPlayerStatus() {
    if(this.state.betCount === this.state.seats.length) {
      this.setState({
        status: 'bets-complete'
      })
    }
  }

  giveCards(seat) {
    return this.state.cards[seat]
  }

  render () {
    return (
      <Container>
          { this.state.status === 'bets-complete' ? 'ready' : 'not ready' }
        <Row className="mt-5">
          { this.state.seats }
          { this.state.betCount }
        </Row>
        <Navbar fixed="bottom">
        <Container className="border border-primary rounded p-3 mt-5">
          <Row>
            <Col>
              <Button variant="outline-success" onClick={this.addSeat}>Add Seat</Button>
            </Col>
          </Row>
          <Row>
          <Col>
              { this.state.nameSaved ? <h5>{ this.state.name }</h5> :
                <Form onSubmit={this.handleSubmit}>
                  {/* <Form.Label>Name: </Form.Label> */}
                  <Form.Control type="text" onChange={this.handleNameChange} placeholder="Player1" />
                  <Form.Control type="submit" value="Set Name" className=" btn btn-success" />
                </Form>
              }
            </Col>
          </Row>
          <Row>
            <Col>
              <Image height="100px" src={require("../../../src/assets/images/avatars/player_avatar.png")} roundedCircle />
            </Col>
          </Row>
          <Row>
            <Image height="30px"src={require("../../../src/assets/images/casino_chip.png")} roundedCircle />
            <h5>{this.state.chips}</h5>
          </Row>
          <Row>
            <Col>
              <Form.Control type="number" onChange={this.handleDeposit} />
              <Button type="button" onClick={this.confirmDeposit}>Deposit</Button>
            </Col>
          </Row>
        </Container>
        </Navbar>
      </Container>
    )
  }
}

export default Player
