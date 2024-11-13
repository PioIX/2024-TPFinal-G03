"use client"
import '@/app/Home/styles.css'
import { useState } from 'react'
import { encontrarMov, encontrarMovByNombre } from "@/funciones/funciones"
import { Fragment } from "react";



export default function Pokemon(props) {
    let [valor1, setValor1] = useState(0)
    let [valor2, setValor2] = useState(0)
    let [valor3, setValor3] = useState(0)
    let [valor4, setValor4] = useState(0)
    let [valor5, setValor5] = useState(0)
    let [valor6, setValor6] = useState(0)
    const nombresStats = ["Salud","Ataque","Defensa","Ataque especial","Defensa especial","Velocidad"]
    const nombreClass = ['sliderSalud','sliderAtaque','sliderDefensa','sliderAtEspecial','sliderDfEspecial','sliderVelocidad']
    let movs = encontrarMov(props.pokemon.posibleMovs)

    function handlerMov(event) {
        props.funcionMov1(event, props.id);
    }
    function handlerEvs(event) {
        props.funcionEvs(event, props.id);
    }
    function handlerPokemon(event) {
        props.funcionPokemon(event, props.id);
    }
    function handlerApodo(event) {
        props.funcionNickname(event, props.id);
    }

    function cambiarValor1(event) {
        setValor1(event.target.value)
    }

    function cambiarValor2(event) {
        setValor2(event.target.value)
    }

    function cambiarValor3(event) {
        setValor3(event.target.value)
    }

    function cambiarValor4(event) {
        setValor4(event.target.value)
    }

    function cambiarValor5(event) {
        setValor5(event.target.value)
    }

    function cambiarValor6(event) {
        setValor6(event.target.value)
    }

    return (
        <div style={{ paddingBottom: "1%", paddingLeft: "1%" }}>
            <div style={{ paddingBottom: "1%", width: "96%" }}>
                <div className='nombrePokemon1' style={{ paddingLeft: "1%", paddingBottom: "1%" }}>
                    <h2>Apodo del pokemon</h2>
                    <div>
                        <input className='nombrePokemon2' type='text'></input>
                    </div>
                </div>
                <div className='datosPokemon'>
                    <div style={{ width: "33%", paddingLeft: "1%" }}>
                        <img src={props.imagenPokemon} className='imagenPokemonEditorEquipo'></img>
                        <h3 style={{ paddingTop: "7%", color: "rgb(11, 199, 199)" }}>Pokemon</h3>
                        <div className='pokemonElegido'>
                            <h2>{props.pokemon}</h2>
                        </div>
                    </div>
                    <p style={{ width: "1%" }}></p>
                    <div style={{ width: "28%" }}>
                        <h1 style={{ color: "rgb(11, 199, 199)" }}>movimientos</h1>
                        <select onChange={handlerMov} id={0} className='estiloSelectorMovimiento'>
                            {movs.map((mov, i) => (
                                <option value={encontrarMovByNombre(mov)} key={mov} >{mov}</option>
                            ))}
                        </select>
                        <h1 style={{ paddingBottom: "8%" }}></h1>
                        <select onChange={handlerMov} id={1} className='estiloSelectorMovimiento'>
                            {movs.map((mov, i) => (
                                <option value={encontrarMovByNombre(mov)} key={mov} >{mov}</option>
                            ))}
                        </select>
                        <h1 style={{ paddingBottom: "8%" }}></h1>
                        <select onChange={handlerMov} id={2} className='estiloSelectorMovimiento'>
                            {movs.map((mov, i) => (
                                <option value={encontrarMovByNombre(mov)} key={mov} >{mov}</option>
                            ))}
                        </select>
                        <h1 style={{ paddingBottom: "8%" }}></h1>
                        <select onChange={handlerMov} id={2} className='estiloSelectorMovimiento'>
                            {movs.map((mov, i) => (
                                <option value={encontrarMovByNombre(mov)} key={mov} >{mov}</option>
                            ))}
                        </select>
                    </div>
                    <p style={{ width: "1%" }}></p>
                    {props.pokemon.baseStats.map((stat, i) => (
                        <div style={{ width: "41%" }} key={i}>
                            <h3 style={{ color: "rgb(11, 199, 199)" }}>{nombresStats[i]}</h3>
                            <input onChange={handlerEvs} type="range" id={i} min="0" max="252" defaultValue={0} className={nombreClass[i]}/>
                            <label>{props.evsPokemon[i]}</label>
                            <span className='valores'>{props.statPokemon[i]}</span>
                            
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}