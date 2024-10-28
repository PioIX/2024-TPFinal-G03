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
  let listaFormasPokemon = []

   useEffect(() => {
    descargarPokemonsBaseDeDatos().then((listaFormasPokemon) => {
      setPokemon1(listaFormasPokemon[0]);
    })
    // setTimeout(() => {
    //   setPokemon1(listaFormasPokemon[0]);
    //   console.log(listaFormasPokemon[0])
    // }, 500);
    
  },[])

  return (
    <div >
      <button onClick={pureba}>Descargar Movs</button>
      {pokemon1==""
      ?<></>
      :<CreadorPokemon pokemonName={pokemon1.name} lista={pokemonForms}></CreadorPokemon>
      }
    </div>
  );
}
