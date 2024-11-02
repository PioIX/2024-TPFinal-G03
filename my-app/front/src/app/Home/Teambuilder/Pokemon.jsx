"use client"
import '@/app/Home/styles.css'


export default function Pokemon(props){
    return(
        <div style={{paddingBottom:"1%", paddingLeft:"1%"}}>
            <div style={{paddingBottom:"1%", width:"96%"}}>
                <div className='nombrePokemon1' style={{paddingLeft:"2%", paddingBottom:"1%"}}>
                    <h2>Nombre del pokemon</h2>
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
                    <div>
                        <h1>movimientos</h1>
                        <h1>martin pone los movimientos</h1>
                        <h1>martin pone los movimientos</h1>
                        <h1>martin pone los movimientos</h1>
                        <h1>martin pone los movimientos</h1>
                    </div>
                    <p style={{width:"1%"}}></p>
                    <div>
                        <h1>estadisticas</h1>
                        <h1>martin pone las estadisticas</h1>

                    </div>
                </div>
            </div>
        </div>
    )
}