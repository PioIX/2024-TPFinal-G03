"use client"

import { useEffect, useState } from "react"

export default function PokemonesCambio(props) {

    let [fondoVida, setFondoVida] = useState("green")
    let [tamanoBarra, setTamanoBarra] = useState("50%")

    useEffect(() => {
        setearFondoVida(props.VidaRestante, props.VidaTotal)
    }, [fondoVida])

    function setearFondoVida(vidaRestante, VidaTotal) {
        if (vidaRestante < (VidaTotal * 0.25)) {
            setFondoVida("red")
        } else if (vidaRestante < (VidaTotal * 0.75)) {
            setFondoVida("orange")
        } else if (vidaRestante > (VidaTotal * 0.75)) {
            setFondoVida("green")
        }
    }

    function handlerFunction() {
        props.funcion(props.valor)
    }

    return (
        <div style={{ width: "150%" }}>
            <button onClick={handlerFunction} disabled={props.desabilitado} style={{ width: "100%", display: "inline-flex", backgroundColor: "#dae5f0", borderRadius: "80px" }}>
                <img style={{ width: "30%" }} src={props.PokemonCambio}></img>
                <div style={{ display: "grid", paddingLeft: "5%" }}>
                    <p style={{ fontSize: "20px", paddingTop: "5%" }}>{props.NombrePokemon}</p>
                    <p style={{ fontSize: "20px", paddingTop: "5%" }}>{props.VidaRestante}/{props.VidaTotal}</p>
                    <p style={{ fontSize: "20px", backgroundColor: fondoVida, backgroundSize: tamanoBarra, color: fondoVida }}>.</p>
                </div>
            </button>
        </div>
    )
}