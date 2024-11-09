"use client"

export default function PokemonesCombate(props){


    return(
        <div style={{width:"100%"}}>
            <p>{props.vidaRestante}/{props.vidaPokemon}</p>
            <img src={props.imagenPokemon} style={{width:"50%"}}></img>
        </div>
    )
}