"use client"

export default function CreadorPokemon(props) {
    return (
        <div>
            <input onChange={props.funcionNickname} value={props.pokemonName}/>
            <select onChange={props.funcionPokemon}>
            {props.lista.map((pokemon,i)=>(
                 <option value={i} key={i} >{pokemon.name}</option>
            ))}
            </select>
            <select onChange={props.funcionMov1}>
            {props.pokemon.posibleMovs.map((mov,i)=>(
                 <option value={mov} key={i} >{mov}</option>
            ))}
            </select>
        </div>
    )}