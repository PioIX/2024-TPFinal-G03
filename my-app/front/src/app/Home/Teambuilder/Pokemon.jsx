"use client"
import '@/app/Home/styles.css'


export default function Pokemon(props){
    return(
        <div style={{paddingBottom:"1%", paddingLeft:"1%"}}>
            <div style={{paddingBottom:"1%", width:"98%"}}>
                <div className='nombrePokemon1' style={{paddingLeft:"2%"}}>
                    <h3>Nombre del pokemon</h3>
                    <div className='nombrePokemon2'>
                        <h2>{props.nombrePokemon}</h2>
                    </div>
                </div>
                <div className='datosPokemon'>
                    <div style={{width:"30%"}}>
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