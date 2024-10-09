"use client"

import styles from "./page.module.css";
import {species,Specie} from "@/clases/Species"
import {Pokemon,pokemons} from "@/clases/Pokemon"
import {pokemonForms, PokemonForm} from "@/clases/PokemonForm"
import {moves, Move} from "@/clases/moves"
import {Team} from "@/clases/Team"
import {Trainer} from "@/clases/Trainer"
import { damageCalculate, turno } from "@/funciones/funciones";
import { useState, useEffect } from "react"


//console.log(damageCalculate(pokemons[1],pokemons[0],moves[0]))

export default function Home() {
  let [pokemonesCombatientes,setPokemonesCombatientes] = useState([pokemons[0],pokemons[1]])
  let [pokemonPropio, setPokemonPropio] = useState(pokemons[0])
  let [pokemonAjeno, setPokemonAjeno] = useState(pokemons[1])
  let [turnoPropio, setTurnoPropio] = useState(0)
  let [turnoRival, setTurnoRival] = useState(0)
  let [equipoPropio, setEquipoPropio] = useState([pokemons[0],pokemons[3]])
  let [equipoAjeno, setEquipoAjeno] = useState([pokemons[1],pokemons[2]])

  function seleccionarAtaquePropio(event) {
    setTurnoPropio(moves[event.target.value])
  }

  function seleccionarAtaqueAjeno(event) {
    setTurnoRival(moves[event.target.value])
  }



  function iniciarTurno (){
    turno(pokemonPropio,pokemonAjeno,turnoPropio,turnoRival)
  }

  return (
    <div>
            <h2>{pokemonPropio.apodo}</h2>
            {pokemonPropio.moves.map((move)=>(
              <button onClick={seleccionarAtaquePropio} value={move}>{moves[move].name}</button>
        ))}
            <h3>Equipo propio</h3>
            {equipoPropio.map((pokemon)=>(
              <div>
                <input type="radio" name="seleccionarPokemonPropio" value={pokemon.id} />
                <label for={pokemon.id}>{pokemon.apodo}</label>
              </div>
            ))}

            <h2>{pokemonAjeno.apodo}</h2>
            {pokemonAjeno.moves.map((move)=>(
                  <button onClick={seleccionarAtaqueAjeno} value={move}>{moves[move].name}</button>
            ))}
            <h3>Equipo ajeno</h3>
            {equipoAjeno.map((pokemon)=>(
              <div>
                <input type="radio" name="seleccionarPokemonAjeno" value={pokemon.id} />
                <label for={pokemon.id}>{pokemon.apodo}</label>
              </div>
            ))}
        <button onClick={iniciarTurno} >iniciar turno</button>
    </div>
  );
}
