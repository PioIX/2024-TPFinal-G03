"use client"

export default function PopUp(props){
    return(
        <dialog open={props.abrirse}>
            <h3>{props.texto}</h3>
            <button onClick={props.funcion}>Volver al creador de equipos</button>
        </dialog>
    )
}