"use client"

export default function Comentario(props){
    return(
        <div style={{paddingLeft:"5%", paddingTop:"3%"}}>
            <p><b>{props.PokemonEnemigo}</b> ha realizado el movimiento <b>{props.Movimiento}</b></p>
        </div>
    )
}