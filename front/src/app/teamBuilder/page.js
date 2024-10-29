"use client"

import {species,Specie} from "@/clases/Species"
import {Pokemon,pokemons} from "@/clases/Pokemon"
import {pokemonForms, PokemonForm} from "@/clases/PokemonForm"
import {moves, Move} from "@/clases/moves"
import {Team} from "@/clases/Team"
import {Trainer} from "@/clases/Trainer"
import { damageCalculate, tirarMoneda, turno,descargarPokemons,descargarPokemonsBaseDeDatos, descargarMovimientos, pureba } from "@/funciones/funciones";
import { useState, useEffect } from "react"
import CreadorPokemon from "@/componentes/creadorPokemon"


//console.log(damageCalculate(pokemons[1],pokemons[0],moves[0]))

export default function Home() {
  let [pokemon1,setPokemon1] = useState("")
  let [apodo1,setApodo1] = useState("")
  let [movs1,setMovs1] = useState(["","","",""])
  let [evsPokemon1,setEvsPokemon1] = useState([0,0,0,0,0,0])
  let [statPokemon1,setStatPokemon1] = useState([0,0,0,0,0,0])
  let listaFormasPokemon = []

  useEffect(() => {
    descargarPokemonsBaseDeDatos().then((listaFormasPokemon) => {
      setPokemon1(pokemonForms[0]);
    })
    
    // setTimeout(() => {
    //   setPokemon1(listaFormasPokemon[0]);
    //   console.log(listaFormasPokemon[0])
    // }, 500);
    
  },[]) 

  function registrarApodo(event){
    setApodo1(event.target.value)
}

function registrarMov1(event){
  let movId = (event.target.id)
  let mov=(event.target.value)
  let nuevoArray = [].concat(movs1)
  nuevoArray[movId] = mov
  setMovs1(nuevoArray)

}

function seleccionarPokemon1(event){
  setPokemon1(pokemonForms[event.target.value])
  setApodo1(pokemonForms[event.target.value].name)
  for (let i = 0;i<statPokemon1.length;i++) {
    if (i == 0) {
      statPokemon1[i] = Math.round((100/100 * ((pokemonForms[event.target.value].baseStats[i]*2) + 31 + evsPokemon1[i]/4)) + 100 + 10)
    }
    else {
      statPokemon1[i] = Math.round(5 + (100/100 * ((pokemonForms[event.target.value].baseStats[i]*2)+31+evsPokemon1[i]/4)))
    }
  }
}

useEffect (() => {
  console.log('hoal')
  if (pokemon1 != "") {
    for (let i = 0;i<statPokemon1.length;i++) {
      if (i == 0) {
        statPokemon1[i] = Math.round((100/100 * ((pokemon1.baseStats[i]*2) + 31 + evsPokemon1[i]/4)) + 100 + 10)
      }
      else {
        statPokemon1[i] = Math.round(5 + (100/100 * ((pokemon1.baseStats[i]*2)+31+evsPokemon1[i]/4)))
      }
    }
  }
},[evsPokemon1])

function obtenerEvs(event){
  let statId = (event.target.id)
  let evs = parseInt(event.target.value)
  let nuevoArray = [].concat(evsPokemon1)
  nuevoArray[statId] = evs
  setEvsPokemon1(nuevoArray)
  console.log(nuevoArray)
}


  return (
    <div >
      <select>
        <option>hoal</option>
        <option>skibidi</option>
      </select>
      {/* <button onClick={descargarPokemons}>Descargar Pokemons</button> */}
      {pokemon1==""
      ?<></>
      :<CreadorPokemon pokemonName={apodo1} lista={pokemonForms} pokemon={pokemon1} funcionNickname={registrarApodo} 
      funcionPokemon={seleccionarPokemon1} funcionMov1={registrarMov1} evsPokemon={evsPokemon1} funcionEvs = {obtenerEvs} statPokemon={statPokemon1}>
      </CreadorPokemon>
      }
    </div>
  );
}
