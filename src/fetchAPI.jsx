async function fetchPokemon(idx) {
  console.log('making API call to get pokemon data')
  return await fetch(`https://pokeapi.co/api/v2/pokemon-form/${idx}/`)
    .then(res => res.json())
    .then(data => {
      // console.log(data)
      return { 'id': data.id, 'name': data.name, 'imgUrl': data.sprites.front_default }
    })
}

export { fetchPokemon }