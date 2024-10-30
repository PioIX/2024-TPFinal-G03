"use client"

import { moves } from "@/clases/moves"
import { encontrarMov } from "@/funciones/funciones"

export default function CreadorPokemon(props) {
     function handlerSelect(event) {
          props.funcionMov1(event, props.id);
     }

    let movs = encontrarMov(props.pokemon.posibleMovs)
    return (
        <div>
            <input onChange={props.funcionNickname} value={props.pokemonName} id={0}/>
            <select onChange={props.funcionPokemon} id={0}>
            {props.lista.map((pokemon,i)=>(
                 <option value={i} key={i} >{pokemon.name}</option>
            ))}
            </select>
            {}
            <select onChange={props.funcionMov1} id={0}>
            {movs.map((mov,i)=>(
                 <option value={mov} key={i} >{mov}</option>
            ))}
            </select>
            <select onChange={props.funcionMov1} id={1}>
            {movs.map((mov,i)=>(
                 <option value={mov} key={i} >{mov}</option>
            ))}
            </select>
            <select onChange={props.funcionMov1}id={2}>
            {movs.map((mov,i)=>(
                 <option value={mov} key={i} >{mov}</option>
            ))}
            </select>
            <select onChange={handlerSelect}  id={3}>
            {movs.map((mov,i)=>(
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