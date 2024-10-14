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
  let turnoAlterPropio = 0
  let turnoAlterAjeno = 0


  function seleccionarAtaquePropio(event) {
    if (event.target.value=="change") {
      setTurnoPropio("change")
      //turnoAlterPropio = "change"

    }
    else {
      setTurnoPropio(moves[event.target.value])
      //turnoAlterPropio =moves[event.target.value]
    }
    console.log(turnoAlterPropio)
  }

  function seleccionarAtaqueAjeno(event) {
    if (event.target.value=="change") {
      setTurnoRival("change")
      //turnoAlterAjeno = "change"
    }
    else{
      setTurnoRival(moves[event.target.value])
      //turnoAlterAjeno = moves[event.target.value]
    }
    console.log(turnoAlterAjeno)

  }
  
function setPokemonACambiarPropioF(event){
  setPokemonACambiarPropio(pokemons[event.target.value])
  console.log(pokemonACambiarPropio)
}


function setPokemonAcambiarAjenoF(event){
  setPokemonACambiaraAjeno(pokemons[event.target.value])
  console.log(pokemonACambiarAjeno)

}

function remplazarPokemonPropio(event){
  pokemonPropio.combatiendo = false
  setPokemonPropio(pokemons[event.target.value])
}

function actualizarPokemonPropio(){

  pokemonPropio.combatiendo = true
  for(let i = 0;i < equipoPropio.length;i++) {
    if (equipoPropio[i] != pokemonPropio) {
      equipoPropio[i].combatiendo = false
    }
  }
      /*preguntar a franco porque no se acutaliza el quipo*/ 
  console.log(equipoPropio)
  setCoco(coco + 1)
}

useEffect(()=>{
  actualizarPokemonPropio()
  
}, [pokemonPropio])

function remplazarPokemonAjeno(event){
  pokemonAjeno.combatiendo = false
  setPokemonAjeno(pokemons[event.target.value])
}

function actualizarPokemonAjeno(){
  pokemonAjeno.combatiendo = true
  setCoco(coco + 1)
}

useEffect(()=>{
  actualizarPokemonAjeno()
  
}, [pokemonAjeno])



  function iniciarTurno (){
    setCoco(coco + 1)
    console.log("LO QUE RECIBE TURNO: pokemonPropio",pokemonPropio,"pokemonAjeno ",pokemonAjeno,"turnoPropio ", turnoAlterPropio,"turnoRival ",turnoAlterAjeno,"pokemonACambiarPropio",pokemonACambiarPropio,"pokemonAcambiarAjeno",pokemonACambiarAjeno)
    let retorno = (turno(pokemonPropio,pokemonAjeno,turnoPropio,turnoRival,pokemonACambiarPropio,pokemonACambiarAjeno))
    setPokemonPropio(retorno[0])
    setPokemonAjeno(retorno[1])
    setCoco(coco + 1)
    // setCoco es como el coco de TF2, si lo saco deja de actualizarse el useState pokemonPropio y pokemonAjeno. NO TOCAR.
    
    }
  

  return (
    <div >
      <h2>{pokemonPropio.apodo}</h2>

      <h3>{pokemonPropio.life}/{pokemonPropio.stats[0]}</h3>

      {pokemonPropio.isDefeated 
      ? <> {equipoPropio.filter(pokemon => pokemon.isDefeated == false).map((pokemon)=>(
        <button onClick={remplazarPokemonPropio} value={pokemon.id}>{pokemon.apodo}</button> 
      ))}</>
      : <> {pokemonPropio.moves.map((move)=>(
        <button onClick={seleccionarAtaquePropio} value={move}>{moves[move].name}</button>
      ))}

        <button onClick={seleccionarAtaquePropio} value={"change"}>change</button>
        
      <h3>Equipo propio</h3>
      {equipoPropio.filter(pokemon => pokemon.combatiendo == false).map((pokemon)=>(
        <div>
          <input type="radio" name="seleccionarPokemonPropio" value={pokemon.id} onChange={setPokemonACambiarPropioF}/>
          <label for={pokemon.id}>{pokemon.apodo}</label>
        </div>
      ))}</>
      }

      <h2>{pokemonAjeno.apodo}</h2>

      <h3>{pokemonAjeno.life}/{pokemonAjeno.stats[0]}</h3>

      {pokemonAjeno.isDefeated 
      ? <> {equipoAjeno.filter(pokemon => pokemon.isDefeated == false).map((pokemon)=>(
        <button onClick={remplazarPokemonAjeno} value={pokemon.id}>{pokemon.apodo}</button> 
      ))}</>
      : <> {pokemonAjeno.moves.map((move)=>(
        <button onClick={seleccionarAtaqueAjeno} value={move}>{moves[move].name}</button>
      ))}

        <button onClick={seleccionarAtaqueAjeno} value={"change"}>change</button>

      <h3>Equipo ajeno</h3>
      {equipoAjeno.filter(pokemon => pokemon.combatiendo == false).map((pokemon)=>(
        <div>
          <input type="radio" name="seleccionarPokemonAjeno" value={pokemon.id} onChange={setPokemonAcambiarAjenoF}/>
          <label for={pokemon.id}>{pokemon.apodo}</label>
        </div>
      ))}</>
      }
      {(pokemonPropio.isDefeated || pokemonAjeno.isDefeated)
      ? <></>
      : <button onClick={iniciarTurno} >iniciar turno</button>
      }
      
    </div>
  );
}
