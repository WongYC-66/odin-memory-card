import { useState } from 'react'
import Card from './Card.jsx'
import Game from './Game.jsx'
import {} from './fetchAPI.jsx'


// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  return (
    <>
      <h1>Memory Card Game</h1>
      <p>Instruction : click card and don't repeat yourself</p>
      <hr />
      <Game />
    </>
  )
}

export default App
