"use client"

import styles from "./page.module.css";
import {species,Specie} from "@/clases/Species"
import {Pokemon,pokemons} from "@/clases/Pokemon"
import {pokemonForms, PokemonForm} from "@/clases/PokemonForm"
import {moves, Move} from "@/clases/moves"
import {Team} from "@/clases/Team"
import {Trainer} from "@/clases/Trainer"
import { damageCalculate } from "@/funciones/funciones";
import { useState, useEffect } from "react"


//console.log(damageCalculate(pokemons[1],pokemons[0],moves[0]))

export default function Home() {
  let [pokemonesCombatientes,setPokemonesCombatientes] = useState([pokemons[0],pokemons[1]])
  let [turnoPropio, setTurnoPropio] = useState(0)
  let [turnoRival, setTurnoRival] = useState(0)
  let [eleccionPropia,setEleccionPropia] = useState(0)

  console.log("daño de ", pokemons[0].apodo, "hacia ", pokemons[1].apodo, "con ", moves[0].name,damageCalculate(pokemons[0],pokemons[1],moves[0]))
  console.log(pokemonesCombatientes)
  function seleccionarAtaque(event) {
    console.log(moves[event.target.value])
  }

  return (
    <div>
      {pokemonesCombatientes.map((pokemon)=>(
          <div>
            <h2>{pokemon.apodo}</h2>
            {pokemon.moves.map((move)=>(
              <button onClick={seleccionarAtaque} value={move}>{moves[move].name}</button>
              
  
          ))}
          </div>
        ))}
    </div>
  );
}
