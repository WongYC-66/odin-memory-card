import Game from './Game.jsx'

function App() {
  return (
    <>
      <header>
        <h1>Memory Card Game</h1>
        <p>Instruction : click card and don't repeat yourself</p>
        <hr />
      </header>
      <main>
        <Game />
      </main>
      <footer>
        Designed and coded by YC-Wong. <a href="https://github.com/WongYC-66/odin-memory-card">Github</a>
      </footer>
    </>
  )
}

export default App
