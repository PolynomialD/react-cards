import React from 'react'
import Game from '../Game/Game'
import { Container } from 'react-bootstrap'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css'

function App() {
  return (
    <div className="App">
      <Container >
        BlackJack
        <Game />
      </Container>
    </div>
  )
}

export default App
