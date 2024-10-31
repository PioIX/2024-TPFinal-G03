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
  let [apodosEquipo, setApodosEquipos] = useState(["","","","","",""])
  let [evsEquipo,setEvsEquipo] = useState([[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0]])
  let [statEquipo,setStatEquipo] = useState([[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0]])
  let [pokemon1,setPokemon1] = useState("")
  let [apodo1,setApodo1] = useState("")
  let [movs1,setMovs1] = useState(["","","",""])
  let [evsPokemon1,setEvsPokemon1] = useState([0,0,0,0,0,0])
  let [statPokemon1,setStatPokemon1] = useState([0,0,0,0,0,0])
  let [ultimoCambioEvs,setUltimoCambioEvs] = useState(0)
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

  function registrarApodo(event,id){
    let nuevoArrayApodo = [].concat(apodosEquipo)
    nuevoArrayApodo[id] = event.target.value
    setApodosEquipos(nuevoArrayApodo) 
  
    //setApodo1(event.target.value)
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

function seleccionarPokemon1(event,id){
  let nuevoArrayEquipo = [].concat(equipo)
  let nuevoArrayApodo = [].concat(apodosEquipo)
  let nuevoArrayStats = [].concat(statEquipo)
  nuevoArrayEquipo[id] = pokemonForms[event.target.value]
  setEquipo(nuevoArrayEquipo)
  nuevoArrayApodo[id] = pokemonForms[event.target.value].name
  setApodosEquipos(nuevoArrayApodo)
  //setPokemon1(pokemonForms[event.target.value])
  //setApodo1(pokemonForms[event.target.value].name)
  for (let i = 0;i<statPokemon1.length;i++) {
    
    if (i == 0) {
      console.log(id)
      nuevoArrayStats[id][i] = Math.round((100/100 * ((pokemonForms[event.target.value].baseStats[i]*2) + 31 + evsEquipo[id][i]/4)) + 100 + 10)
      //statPokemon1[i] = Math.round((100/100 * ((pokemonForms[event.target.value].baseStats[i]*2) + 31 + evsPokemon1[i]/4)) + 100 + 10)
    }
    else {
      nuevoArrayStats[id][i] = Math.round(5 + (100/100 * ((pokemonForms[event.target.value].baseStats[i]*2)+31+evsEquipo[id][i]/4)))
      //statPokemon1[i] = Math.round(5 + (100/100 * ((pokemonForms[event.target.value].baseStats[i]*2)+31+evsPokemon1[i]/4)))
    }
  }
  setStatEquipo(nuevoArrayStats)
  console.log(nuevoArrayStats)
}

function calcularStats(id) {
  let nuevoArray = [].concat(statEquipo)
  if (equipo[id] != "") {
    for (let i = 0;i<statPokemon1.length;i++) {
      if (i == 0) {
        nuevoArray[id][i] = Math.round((100/100 * ((equipo[id].baseStats[i]*2) + 31 + evsEquipo[id][i]/4)) + 100 + 10)
      }
      else {
        nuevoArray[id][i] = Math.round(5 + (100/100 * ((equipo[id].baseStats[i]*2)+31+evsEquipo[id][i]/4)))
      }
    }
    setStatEquipo(nuevoArray)
  }
  console.log(statEquipo[0])
}

function obtenerEvs(event,id){
  let statId = (event.target.id)
  let evs = parseInt(event.target.value)
  let nuevoArray = [].concat(evsEquipo)
  nuevoArray[id][statId] = evs
  setEvsEquipo(nuevoArray)
  calcularStats(id)
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
      <>
      <CreadorPokemon pokemonName={apodosEquipo[0]} lista={pokemonForms} id={0} pokemon={equipo[0]} funcionNickname={registrarApodo} 
      funcionPokemon={seleccionarPokemon1} funcionMov1={registrarMov1} evsPokemon={evsEquipo[0]} funcionEvs = {obtenerEvs} statPokemon={statEquipo[0]}>
      </CreadorPokemon>
      <CreadorPokemon pokemonName={apodosEquipo[1]} lista={pokemonForms} id={1} pokemon={equipo[1]} funcionNickname={registrarApodo} 
      funcionPokemon={seleccionarPokemon1} funcionMov1={registrarMov1} evsPokemon={evsEquipo[1]} funcionEvs = {obtenerEvs} statPokemon={statEquipo[1]}>
      </CreadorPokemon>
      <CreadorPokemon pokemonName={apodosEquipo[2]} lista={pokemonForms} id={2} pokemon={equipo[2]} funcionNickname={registrarApodo} 
      funcionPokemon={seleccionarPokemon1} funcionMov1={registrarMov1} evsPokemon={evsEquipo[2]} funcionEvs = {obtenerEvs} statPokemon={statEquipo[2]}>
      </CreadorPokemon>
      <CreadorPokemon pokemonName={apodosEquipo[3]} lista={pokemonForms} id={3} pokemon={equipo[3]} funcionNickname={registrarApodo} 
      funcionPokemon={seleccionarPokemon1} funcionMov1={registrarMov1} evsPokemon={evsEquipo[3]} funcionEvs = {obtenerEvs} statPokemon={statEquipo[3]}>
      </CreadorPokemon>
      <CreadorPokemon pokemonName={apodosEquipo[4]} lista={pokemonForms} id={4} pokemon={equipo[4]} funcionNickname={registrarApodo} 
      funcionPokemon={seleccionarPokemon1} funcionMov1={registrarMov1} evsPokemon={evsEquipo[4]} funcionEvs = {obtenerEvs} statPokemon={statEquipo[4]}>
      </CreadorPokemon>
      <CreadorPokemon pokemonName={apodosEquipo[5]} lista={pokemonForms} id={5} pokemon={equipo[5]} funcionNickname={registrarApodo} 
      funcionPokemon={seleccionarPokemon1} funcionMov1={registrarMov1} evsPokemon={evsEquipo[5]} funcionEvs = {obtenerEvs} statPokemon={statEquipo[5]}>
      </CreadorPokemon>
      </>
      }
    </div>
  );
}