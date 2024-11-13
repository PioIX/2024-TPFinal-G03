"use client"

export default function Comentario(props){
    let hora = new Date()
    return(
        <div style={{paddingLeft:"5%", paddingTop:"3%"}}>
            <p><b>{props.PokemonEnemigo}</b> ha usado el movimiento <b>{props.Movimiento}</b> { hora.toLocaleTimeString()}</p>
        </div>
    )
}