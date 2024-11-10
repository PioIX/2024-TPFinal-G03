"use client"

export default function PokemonesCombate(props){


    return(
        <>
        <div className="pokemonCombate" >
            <p>{props.nombrePokemon}</p>
            <p>{props.vidaRestante}/{props.vidaPokemon}</p>
            <img src={props.imagenPokemon} style={{width:"60%"}}></img>
        </div>
        </>
    )
}