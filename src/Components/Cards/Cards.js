import React from 'react'

class Card extends React.Component {
  constructor() {
    super()
    this.state = {
    }
  }

  render() {
    return <img height="50px" src={this.props.card.image}></img>
  }
}

export default Card
