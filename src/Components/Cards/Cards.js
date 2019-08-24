import React from 'react'

class Card extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return <img height="50px" src={this.props.image} alt=""></img>
  }
}

export default Card
