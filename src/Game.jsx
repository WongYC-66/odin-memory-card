import { useState, useEffect } from "react"
import { fetchPokemon } from "./fetchAPI.jsx";
import Card from "./Card";

export default function Game() {
    const [pokeData, setPokeData] = useState([])
    const [isFetched, setIsFetched] = useState(false)
    const [memory, setMemory] = useState([])
    const [score, setScore] = useState(0)
    const [highScore, setHighScore] = useState(0)
    const [randomArr, _] = useState(() => {
        let arr = []
        for (let i = 0; i < 12; i++) {
            while (true) {
                let x = Math.ceil(Math.random() * 386)
                if (!arr.includes(x)) {
                    arr.push(x)
                    break;
                }
            }
        }
        return arr
    })

    const handleClick = (id) => {
        let sortedData = pokeData.slice()
        sortedData.sort((a, b) => 0.5 - Math.random())
        setPokeData(sortedData.reverse())
        // Memory logic
        if (!memory.includes(id)) { // not repeat, continue
            setScore(score + 1)
            setMemory([...memory, id])
            if (score >= highScore) {
                setHighScore(score + 1)
            }
        } else { // repeated
            setScore(0)
            setMemory([])
        }
    }

    useEffect(() => {
        randomArr.forEach(idx => {
            fetchPokemon(idx)
                .then(response => {
                    setPokeData(prev => [...prev, response])
                })
        })
    }, [])

    useEffect(() => {
        if (isFetched) return
        if (pokeData.length === randomArr.length) setIsFetched(true)
    }, [pokeData])

    useEffect(() => {
        if (highScore === randomArr.length) {
            alert('You won, please refresh the page for new game!')
        }
    }, [highScore])



    if (!isFetched) return <p> Loading ... </p>

    // once done fetch, main loop :
    console.log('main loop')
    return (
        <>
            <div className="scoreBar">
                <p>Score : {score}</p>
                <p>High Score : {highScore}</p>
            </div>
            <div className="card-panel">
                {pokeData.map(pokemon => {
                    if (!pokemon) return
                    return <Card key={pokemon.id} pokemon={pokemon} handleClick={() => handleClick(pokemon.id)} />
                })}
            </div>
        </>
    )

}