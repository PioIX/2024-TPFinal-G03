"use client"
import '@/app/Home/styles.css'


export default function Pokemon(props){
    return(

        <div className='divPokemon'>
            <h2>Nombre pokemon</h2>
            <h2 nombrePokemon={props.nombrePokemon}></h2>
            <h2>(Pokemon)</h2>
            </div>
    )
}