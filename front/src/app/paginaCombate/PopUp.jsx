"use client"

export default function PopUp(props){
    return(
        <dialog open={props.abrirse} style={{width:"100%", height:"100%", backgroundColor:"blue"}}>
            <h3>{props.texto}</h3>
            <button onClick={props.funcion}>Volver al creador de equipos</button>
        </dialog>
    )
}