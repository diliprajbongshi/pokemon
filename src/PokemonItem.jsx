

const PokemonItem = ({pokemon}) => {
  return (
    <>
       <li className="pokemon_card">
           <figure className="img">
             <img className="card-img" src={pokemon.sprites.other.dream_world.front_default} alt={pokemon.name} />
           </figure>
           <h1 className="pokemon_name">{pokemon.name}</h1>
           <div className="names">
             <p>
                {
                    pokemon.types.map((curEle)=>curEle.type.name).join(", ")
                }
             </p>
           </div>
            <div className="base_main">
              <div className="base">
                <p>{pokemon.stats[1].base_stat}</p>
                <span>Attack</span>
              </div>
              <div className="base">
                <p>{pokemon.stats[1].base_stat}</p>
                <span>Attack</span>
              </div>
            </div>
           
       </li>
       
    </>
  )
}

export default PokemonItem