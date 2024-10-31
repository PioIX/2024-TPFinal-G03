"use client"

import { moves } from "@/clases/moves"
import { encontrarMov } from "@/funciones/funciones"

export default function CreadorPokemon(props) {
     function handlerMov(event) {
          props.funcionMov1(event, props.id);
     }
     function handlerEvs(event) {
          props.funcionEvs(event, props.id);
     }
     function handlerPokemon(event) {
          props.funcionPokemon(event, props.id);
     }
     function handlerApodo(event) {
          props.funcionNickname(event, props.id);
     }

    let movs = encontrarMov(props.pokemon.posibleMovs)
    return (
        <div>
            <input onChange={handlerApodo} value={props.pokemonName} id={0}/>
            <select onChange={handlerPokemon} id={0}>
            {props.lista.map((pokemon,i)=>(
                 <option value={i} key={i} >{pokemon.name}</option>
            ))}
            </select>
            {}
            <select onChange={handlerMov} id={0}>
            {movs.map((mov,i)=>(
                 <option value={mov} key={i} >{mov}</option>
            ))}
            </select>
            <select onChange={handlerMov} id={1}>
            {movs.map((mov,i)=>(
                 <option value={mov} key={i} >{mov}</option>
            ))}
            </select>
            <select onChange={handlerMov}id={2}>
            {movs.map((mov,i)=>(
                 <option value={mov} key={i} >{mov}</option>
            ))}
            </select>
            <select onChange={handlerMov}  id={3}>
            {movs.map((mov,i)=>(
                 <option value={mov} key={i} >{mov}</option>
            ))}
            </select>
            <br></br>
            {props.pokemon.baseStats.map((stat,i)=>(
                <>
                 <input onChange={handlerEvs} key={i} type="range" id={i} min="0" max="252" defaultValue={0}/>
                 <label>{props.evsPokemon[i]}</label>
                 <h3>{props.statPokemon[i]}</h3>
                </>
            ))}
        </div>
    )}