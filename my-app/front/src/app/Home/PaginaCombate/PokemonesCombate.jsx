"use client"

export default function PokemonesCombate(props){


    return(
        <div style={{width:"30%"}}>
            <p>{props.vidaRestante}/{props.vidaPokemon}</p>
            <img src={props.imagenPokemon}></img>
        </div>
    )
}