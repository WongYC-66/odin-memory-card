export default function({pokemon, handleClick}){
    return(
        <div className="card" idx={pokemon.id} onClick={handleClick}>
            <img src={pokemon.imgUrl} alt="" />
            <p>{pokemon.name}</p>
        </div>
    )
}