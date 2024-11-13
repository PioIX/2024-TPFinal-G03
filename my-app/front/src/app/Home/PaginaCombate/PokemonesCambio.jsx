"use client"

import { useEffect, useState } from "react"

export default function PokemonesCambio(props){
    
    let [tamanoColor, setTamanoColor] = useState("100%");
    let [fondoVida, setFondoVida] = useState("green")

    useEffect(() => {
        setearFondoVida(props.vidaRestante, props.vidaPokemon)
    }, [fondoVida])

    function setearFondoVida(vidaRestante, vidaPokemon){
        if (vidaRestante < (vidaPokemon * 0.25)){
            setTamanoColor(`${(Math.floor((vidaRestante * 100) / vidaPokemon))}`)
            setFondoVida("red")
        } else if (vidaRestante < (vidaPokemon * 0.75)){
            setTamanoColor(`${(Math.floor((vidaRestante * 100) / vidaPokemon))}`)
            setFondoVida("orange")
        } else if (vidaRestante > (vidaPokemon * 0.75)){
            setTamanoColor(`${(Math.floor((vidaRestante * 100) / vidaPokemon))}`)
            setFondoVida("green")
        }
    }

    return(
        <button style={{width:"100%", display:"inline-flex", backgroundColor:"#dae5f0", borderRadius: "80px", border:"0"}}>
            <img style={{width:"30%"}} src={props.PokemonCambio}></img>
            <div style={{display:"grid", paddingLeft:"5%"}}>
                <p style={{fontSize:"20px", paddingTop:"5%"}}>{props.NombrePokemon}</p>
                <p style={{fontSize:"120%", width:`100%`,  paddingLeft:"10%"}}>{props.vidaRestante}/{props.vidaPokemon}</p>
                <p style={{backgroundColor:fondoVida, fontSize:"15px", width:`${tamanoColor}%`, color:fondoVida}}>.</p> 
            </div>
        </button>
    )
}