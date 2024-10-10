"use client"

import styles from "./page.module.css";
import {species,Specie} from "@/clases/Species"
import {Pokemon,pokemons} from "@/clases/Pokemon"
import {pokemonForms, PokemonForm} from "@/clases/PokemonForm"
import {moves, Move} from "@/clases/moves"
import {Team} from "@/clases/Team"
import {Trainer} from "@/clases/Trainer"
import { damageCalculate, tirarMoneda, turno } from "@/funciones/funciones";
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
  let [pokemonACambiarPropio, setPokemonACambiarPropio] = useState()
  let [pokemonACambiarAjeno,setPokemonACambiaraAjeno] = useState()
  let [coco, setCoco] = useState(0)

  function seleccionarAtaquePropio(event) {
    if (event.target.value=="change") {
      setTurnoPropio("change")
    }
    else {
      setTurnoPropio(moves[event.target.value])
    }
  }

  function seleccionarAtaqueAjeno(event) {
    if (event.target.value=="change") {
      setTurnoRival("change")
    }
    else{
      setTurnoRival(moves[event.target.value])
    }
  }
  
function setPokemonACambiarPropioF(event){
  setPokemonACambiarPropio(pokemons[event.target.value])
  console.log(pokemonACambiarPropio)
}


function setPokemonAcambiarAjenoF(event){
  setPokemonACambiaraAjeno(pokemons[event.target.value])
  console.log(pokemonACambiarAjeno)

}


  function iniciarTurno (){
    console.log("LO QUE RECIBE TURNO: pokemonPropio",pokemonPropio,"pokemonAjeno ",pokemonAjeno,"turnoPropio ", turnoPropio,"turnoRival ",turnoRival,"pokemonACambiarPropio",pokemonACambiarPropio,"pokemonAcambiarAjeno",pokemonACambiarAjeno)
    let retorno = (turno(pokemonPropio,pokemonAjeno,turnoPropio,turnoRival,pokemonACambiarPropio,pokemonACambiarAjeno))
    console.log(retorno)
    setPokemonPropio(retorno[0])
    console.log("primer pokemon")
    console.log(pokemonPropio)
    setPokemonAjeno(retorno[1])
    console.log("segundo pokemon")
    console.log(pokemonAjeno)
    setCoco(coco + 1)
    // setCoco es como el coco de TF2, si lo saco deja de actualizarse el useState pokemonPropio y pokemonAjeno. NO TOCAR, TOQUEN A A.S.
    
    }
  

  return (
    <div >
            <h2>{pokemonPropio.apodo}</h2>
            <h3>{pokemonPropio.life}/{pokemonPropio.stats[0]}</h3>
            {pokemonPropio.moves.map((move)=>(
              <button onClick={seleccionarAtaquePropio} value={move}>{moves[move].name}</button>
        ))}
              <button onClick={seleccionarAtaquePropio} value={"change"}>change</button>
            <h3>Equipo propio</h3>
            {equipoPropio.map((pokemon)=>(
              <div>
                <input type="radio" name="seleccionarPokemonPropio" value={pokemon.id} onChange={setPokemonACambiarPropioF}/>
                <label for={pokemon.id}>{pokemon.apodo}</label>
              </div>
            ))}

            <h2>{pokemonAjeno.apodo}</h2>
            <h3>{pokemonAjeno.life}/{pokemonAjeno.stats[0]}</h3>
            {pokemonAjeno.moves.map((move)=>(
              <button onClick={seleccionarAtaqueAjeno} value={move}>{moves[move].name}</button>
            ))}
              <button onClick={seleccionarAtaqueAjeno} value={"change"}>change</button>
            <h3>Equipo ajeno</h3>
            {equipoAjeno.map((pokemon)=>(
              <div>
                <input type="radio" name="seleccionarPokemonAjeno" value={pokemon.id} onChange={setPokemonAcambiarAjenoF}/>
                <label for={pokemon.id}>{pokemon.apodo}</label>
              </div>
            ))}
        <button onClick={iniciarTurno} >iniciar turno</button>
    </div>
  );
}
