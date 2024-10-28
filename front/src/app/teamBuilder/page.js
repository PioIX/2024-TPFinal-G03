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
  movs1[0]=(event.target.value)
}

function seleccionarPokemon1(event){
  setPokemon1(pokemonForms[event.target.value])
  setApodo1(pokemonForms[event.target.value].name)
  console.log(pokemonForms[event.target.value])
}

  return (
    <div >
      <select>
        <option>hoal</option>
        <option>skibidi</option>
      </select>
      <button onClick={pureba}>Descargar Movs</button>
      {pokemon1==""
      ?<></>
      :<CreadorPokemon pokemonName={apodo1} lista={pokemonForms} pokemon={pokemon1} funcionNickname={registrarApodo} funcionPokemon={seleccionarPokemon1} funcionMov1={registrarMov1}></CreadorPokemon>
      }
    </div>
  );
}
