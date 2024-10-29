"use client"

import { moves } from "@/clases/moves"

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
            {props.pokemon.baseStats.map((stat,i)=>(
                <>
                 <input onChange={props.funcionEvs} key={i} type="range" id={i} min="0" max="252" defaultValue={0}/>
                 <label>{props.evsPokemon[i]}</label>
                 <h3>{props.statPokemon[i]}</h3>
                </>
            ))}
        </div>
    )}