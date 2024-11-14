"use client"

import { useEffect, useState } from "react"

export default function PrimerPokemon(props){
    return(
        <div className="PrimerPokemon">
            <button style={{width:"100%", border:"none", backgroundColor:" rgba(255, 255, 255, 0)"}} onClick={props.Funcion}><img src={props.Pokemon} style={{width:"100%"}}></img></button>
        </div>
    )
}