"use client"

import { useEffect, useState } from "react"

export default function PokemonesCombate(props){

    let [fondoVida, setFondoVida] = useState("")

    useEffect

    function setearFondoVida(vidaRestante, vidaPokemon){
        if (vidaRestante < (vidaPokemon * 0.25)){
            setFondoVida("red")
        } else if (vidaRestante < (vidaPokemon * 0.75)){
            setFondoVida("orange")
        } else if (vidaRestante > (vidaPokemon * 0.75)){
            setearFondoVida("green")
        }
    }

    return(
        <>
        <div className="pokemonCombate" >
            <p>{props.nombrePokemon}</p>
            <div style={{backgroundColor:"#dae5f0", width:"100%", fontSize:"100%"}}>
                <div style={{padding:"2%"}}>
                    <p style={{backgroundColor:fondoVida, fontSize:"100%", width:"100%"}}>{props.vidaRestante}/{props.vidaPokemon}</p>                    
                </div>
            </div>
            <img src={props.imagenPokemon} style={{width:"100%"}}></img>
        </div>
        </>
    )
}