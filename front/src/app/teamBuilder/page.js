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
  let [equipo,setEquipo] = useState(["","","","","",""])
  let [pokemon1,setPokemon1] = useState("")
  let [apodo1,setApodo1] = useState("")
  let [movs1,setMovs1] = useState(["","","",""])
  let [evsPokemon1,setEvsPokemon1] = useState([0,0,0,0,0,0])
  let [statPokemon1,setStatPokemon1] = useState([0,0,0,0,0,0])
  let listaFormasPokemon = []

  useEffect(() => {
    descargarPokemonsBaseDeDatos().then((listaFormasPokemon) => {
      let nuevoArray = [].concat(equipo)
      for (let i = 0;i<equipo.length;i++) {
        nuevoArray[i] = pokemonForms[0]
        setEquipo(nuevoArray)
      }
    })
    
    // setTimeout(() => {
    //   setPokemon1(listaFormasPokemon[0]);
    //   console.log(listaFormasPokemon[0])
    // }, 500);
    
  },[]) 

  function registrarApodo(event){
    setApodo1(event.target.value)
}

function registrarMov1(event,id){
  let movId = (event.target.id)
  let mov=(event.target.value)
  console.log("movId: ",movId)
  console.log("mov: ",mov)
  let nuevoArray = [].concat(movs1)
  nuevoArray[movId] = mov
  setMovs1(nuevoArray)  
}

function seleccionarPokemon1(event){
  let nuevoArray = [].concat(statPokemon1)
  setPokemon1(pokemonForms[event.target.value])
  setApodo1(pokemonForms[event.target.value].name)
  for (let i = 0;i<statPokemon1.length;i++) {
    
    if (i == 0) {
    nuevoArray[i] = Math.round((100/100 * ((pokemonForms[event.target.value].baseStats[i]*2) + 31 + evsPokemon1[i]/4)) + 100 + 10)
    setStatPokemon1(nuevoArray)
      //statPokemon1[i] = Math.round((100/100 * ((pokemonForms[event.target.value].baseStats[i]*2) + 31 + evsPokemon1[i]/4)) + 100 + 10)
    }
    else {
      nuevoArray[i] = Math.round(5 + (100/100 * ((pokemonForms[event.target.value].baseStats[i]*2)+31+evsPokemon1[i]/4)))
      setStatPokemon1(nuevoArray)
      //statPokemon1[i] = Math.round(5 + (100/100 * ((pokemonForms[event.target.value].baseStats[i]*2)+31+evsPokemon1[i]/4)))
    }
  }
  console.log(nuevoArray)
}

useEffect (() => {
  console.log('hoal')
  let nuevoArray = [].concat(statPokemon1)
  if (pokemon1 != "") {
    for (let i = 0;i<statPokemon1.length;i++) {
      if (i == 0) {
        nuevoArray[i] = Math.round((100/100 * ((pokemon1.baseStats[i]*2) + 31 + evsPokemon1[i]/4)) + 100 + 10)
      setStatPokemon1(nuevoArray)
      }
      else {
        nuevoArray[i] = Math.round(5 + (100/100 * ((pokemon1.baseStats[i]*2)+31+evsPokemon1[i]/4)))
      setStatPokemon1(nuevoArray)
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
      {equipo[0]==""
      ?<></>
      :
      <CreadorPokemon pokemonName={apodo1} lista={pokemonForms} id={0} pokemon={equipo[0]} funcionNickname={registrarApodo} 
      funcionPokemon={seleccionarPokemon1} funcionMov1={registrarMov1} evsPokemon={evsPokemon1} funcionEvs = {obtenerEvs} statPokemon={statPokemon1}>
      </CreadorPokemon>
    
      }
    </div>
  );
}
