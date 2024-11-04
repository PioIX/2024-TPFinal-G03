"use client"
import '@/app/Home/styles.css'


export default function Pokemon(props){
    return(
        <div style={{paddingBottom:"1%", paddingLeft:"1%"}}>
            <div style={{paddingBottom:"1%", width:"96%"}}>
                <div className='nombrePokemon1' style={{paddingLeft:"2%", paddingBottom:"1%"}}>
                    <h2>Apodo del pokemon</h2>
                    <div>
                        <input className='nombrePokemon2' type='text'></input>
                    </div>
                </div>
                <div className='datosPokemon'>
                    <div style={{width:"30%", height:"0%"}}>
                        <img src={props.imagenPokemon} className='imagenPokemonEditorEquipo'></img>
                        <h3 style={{paddingLeft:"2%"}}>Pokemon</h3>
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
                        <h1 style={{paddingBottom:"5%"}}></h1>
                        <select className='estiloSelectorMovimiento'>
                            <option>ay ay ay</option>
                            <option>me pica el pene</option>
                            <option>me pica el pene</option>
                            <option>me pica el pene</option>
                        </select>
                        <h1 style={{paddingBottom:"5%"}}></h1>
                        <select className='estiloSelectorMovimiento'>
                            <option>ay ay ay</option>
                            <option>me pica el pene</option>
                            <option>me pica el pene</option>
                            <option>me pica el pene</option>
                        </select>
                        <h1 style={{paddingBottom:"5%"}}></h1>
                        <select className='estiloSelectorMovimiento'>
                            <option>ay ay ay</option>
                            <option>me pica el pene</option>
                            <option>me pica el pene</option>
                            <option>me pica el pene</option>
                        </select>
                    </div>
                    <p style={{width:"1%"}}></p>
                    <div  style={{width: "25%"}}>
                        <h1>estadisticas</h1>
                        <h3>Salud</h3>
                        <input type='range' min="0" max="255" value={0} style={{width:"100%"}}></input>
                        <h3>Ataque</h3>
                        <input type='range' min="0" max="255" value={0} style={{width:"100%"}}></input>
                        <h3>Defensa</h3>
                        <input type='range' min="0" max="255" value={0} style={{width:"100%"}}></input>
                        <h3>At. Especial</h3>
                        <input type='range' min="0" max="255" value={0} style={{width:"100%"}}></input>
                        <h3>Df. Especial</h3>
                        <input type='range' min="0" max="255" value={0} style={{width:"100%"}}></input>
                        <h3>Velocidad</h3>
                        <input type='range' min="0" max="255" value={0} style={{width:"100%"}}></input>
                    </div>
                </div>
            </div>
        </div>
    )
}