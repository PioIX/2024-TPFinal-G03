"use client"

export default function CreadorPokemon(props) {
    return (
        <div>
            <input onChange={props.funcionNickname} value={props.pokemonName}/>
            <select>
            {props.lista.map((pokemon,i)=>(
                 <label value={i}>{pokemon.name}</label>
            ))}
            </select>
        </div>
    )}