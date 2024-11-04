"use client"
import '@/app/Home/styles.css'
import { useState } from 'react'


export default function Pokemon(props){
    let [valor1, setValor1] = useState(0)
    let [valor2, setValor2] = useState(0)
    let [valor3, setValor3] = useState(0)
    let [valor4, setValor4] = useState(0)
    let [valor5, setValor5] = useState(0)
    let [valor6, setValor6] = useState(0)


    function cambiarValor1(event){
        setValor1(event.target.value)
    }

    function cambiarValor2(event){
        setValor2(event.target.value)
    }

    function cambiarValor3(event){
        setValor3(event.target.value)
    }

    function cambiarValor4(event){
        setValor4(event.target.value)
    }

    function cambiarValor5(event){
        setValor5(event.target.value)
    }

    function cambiarValor6(event){
        setValor6(event.target.value)
    }

    return(
        <div style={{paddingBottom:"1%", paddingLeft:"1%"}}>
            <div style={{paddingBottom:"1%", width:"96%"}}>
                <div className='nombrePokemon1' style={{paddingLeft:"1%", paddingBottom:"1%"}}>
                    <h2>Apodo del pokemon</h2>
                    <div>
                        <input className='nombrePokemon2' type='text'></input>
                    </div>
                </div>
                <div className='datosPokemon'>
                    <div style={{width:"30%", paddingLeft:"1%"}}>
                        <img src={props.imagenPokemon} className='imagenPokemonEditorEquipo'></img>
                        <h3 style={{paddingTop:"19  %"}}>Pokemon</h3>
                        <div className='pokemonElegido'>
                            <h2>{props.pokemon}</h2>
                        </div>
                    </div>
                    <p style={{width:"1%"}}></p>
                    <div style={{width: "28%"}}>
                        <h1>movimientos</h1>
                        <select className='estiloSelectorMovimiento'>
                            <option>ay ay ay</option>
                            <option>me pica el pene</option>
                            <option>me pica el pene</option>
                            <option>me pica el pene</option>
                        </select>
                        <h1 style={{paddingBottom:"8%"}}></h1>
                        <select className='estiloSelectorMovimiento'>
                            <option>ay ay ay</option>
                            <option>me pica el pene</option>
                            <option>me pica el pene</option>
                            <option>me pica el pene</option>
                        </select>
                        <h1 style={{paddingBottom:"8%"}}></h1>
                        <select className='estiloSelectorMovimiento'>
                            <option>ay ay ay</option>
                            <option>me pica el pene</option>
                            <option>me pica el pene</option>
                            <option>me pica el pene</option>
                        </select>
                        <h1 style={{paddingBottom:"8%"}}></h1>
                        <select className='estiloSelectorMovimiento'>
                            <option>ay ay ay</option>
                            <option>me pica el pene</option>
                            <option>me pica el pene</option>
                            <option>me pica el pene</option>
                        </select>
                    </div>
                    <p style={{width:"1%"}}></p>
                    <div  style={{width: "41%"}}>
                        <h1>estadisticas (Evs. Restantes: 502)</h1>
                        <h3>Salud</h3>
                        <input type='range' min="0" max="255" value={valor1} style={{width:"90%"}} onChange={cambiarValor1}></input>
                        <span className='valores'>{valor1}</span>
                        <h3>Ataque</h3>
                        <input type='range' min="0" max="255" value={valor2} style={{width:"90%"}} onChange={cambiarValor2}></input>
                        <span className='valores'>{valor2}</span>
                        <h3>Defensa</h3>
                        <input type='range' min="0" max="255" value={valor3} style={{width:"90%"}} onChange={cambiarValor3}></input>
                        <span className='valores'>{valor3}</span>
                        <h3>At. Especial</h3>
                        <input type='range' min="0" max="255" value={valor4} style={{width:"90%"}} onChange={cambiarValor4}></input>
                        <span className='valores'>{valor4}</span>
                        <h3>Df. Especial</h3>
                        <input type='range' min="0" max="255" value={valor5} style={{width:"90%"}} onChange={cambiarValor5}></input>
                        <span className='valores'>{valor5}</span>
                        <h3>Velocidad</h3>
                        <input type='range' min="0" max="255" value={valor6} style={{width:"90%"}} onChange={cambiarValor6}></input>
                        <span className='valores'>{valor6}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}