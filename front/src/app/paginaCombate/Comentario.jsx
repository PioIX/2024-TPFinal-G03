"use client"

export default function Comentario(props){
    return(
        <div style={{paddingLeft:"5%", paddingTop:"3%"}}>
            <p><b>{props.texto}</b> // <b>hora actual</b></p>
        </div>
    )
}