export default function({pokemon, handleClick}){
    console.log('re-render card')
    return(
        <div className="card" idx={pokemon.id} onClick={handleClick}>
            <img src={pokemon.imgUrl} alt="" />
            <p>{pokemon.name}</p>
        </div>
    )
}