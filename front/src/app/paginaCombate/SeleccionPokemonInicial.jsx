"use client"

import { useEffect, useState } from "react"

export default function PrimerPokemon(props){
    function llamarAlDiv(){
        props.Funcion(props.valor)
    }
    return(
        <div className="PrimerPokemon">
            <button style={{width:"1000%", border:"none", backgroundColor:" rgba(255, 255, 255, 0)"}}  onClick={llamarAlDiv}><img src={props.Pokemon} style={{width:"100%"}}></img></button>
        </div>
    )
}