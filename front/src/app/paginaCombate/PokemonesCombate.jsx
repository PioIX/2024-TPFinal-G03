"use client"

import { useEffect, useState } from "react"

export default function PokemonesCombate(props){
    let [tamanoColor, setTamanoColor] = useState("100%");
    let [fondoVida, setFondoVida] = useState("green")

    
    useEffect(() => {
        setearFondoVida(props.vidaRestante, props.vidaPokemon)
    }, [fondoVida])

    function setearFondoVida(vidaRestante, vidaPokemon){
        if (vidaRestante < (vidaPokemon * 0.25)){
            setTamanoColor(`${(Math.floor((vidaRestante * 100) / vidaPokemon))}%`)
            setFondoVida("red")
        } else if (vidaRestante < (vidaPokemon * 0.75)){
            setTamanoColor(`${(Math.floor((vidaRestante * 100) / vidaPokemon))}%`)
            setFondoVida("orange")
        } else if (vidaRestante > (vidaPokemon * 0.75)){
            setTamanoColor(`${(Math.floor((vidaRestante * 100) / vidaPokemon))}%`)
            setFondoVida("green")
        }
    }

    return(
        <>
        <div className="pokemonCombate" >   
            <div style={{backgroundColor:"#dae5f0", width:"auto"}}>
                <div style={{padding:"1%"}}>
                    <p style={{backgroundColor:"gray", width:"100%"}}>{props.nombrePokemon}</p>                
                </div>
            </div>
            <div style={{backgroundColor:"#dae5f0", width:"100%", fontSize:"100%"}}>
                <div style={{padding:"2%"}}>
                    <p style={{fontSize:"100%", width:`100%`,}}>{props.vidaRestante}/{props.vidaPokemon}</p>
                    <p style={{backgroundColor:fondoVida, fontSize:"100%", width:`100%`, backgroundSize:`${tamanoColor}%`, color:fondoVida}}>.</p>                    
                </div>
            </div>
            <img src={props.imagenPokemon} style={{width:"100%"}}></img>
        </div>
        </>
    )
}