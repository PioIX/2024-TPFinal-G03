"use client"
import '@/app/Home/styles.css'


export default function Pokemon(props){
    return(
        <div style={{paddingLeft:"10%", paddingBottom:"10px"}}>
            <button className='botonEquipoSeleccionado'>
                <div>
                    <h2>{props.nombreEquipo}</h2>
                    <div style={{alignItems:"center", display:'flex', justifyContent:"center", alignContent:"center"}}>
                        <img src={props.pokemon1} className='imagenPokemonTeambuilder'></img>
                        <img src={props.pokemon2} className='imagenPokemonTeambuilder'></img>                            <img src={props.pokemon3} className='imagenPokemonTeambuilder'></img>
                        <img src={props.pokemon4} className='imagenPokemonTeambuilder'></img>
                        <img src={props.pokemon5} className='imagenPokemonTeambuilder'></img>
                        <img src={props.pokemon6} className='imagenPokemonTeambuilder'></img>
                    </div>
                </div>
            </button>
            <button className='botonEditar'>editar</button>
            <p style={{paddingBottom: "20px"}}></p>
        </div>
    )
}