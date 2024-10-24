"use client"

import {species,Specie} from "@/clases/Species"
import {Pokemon,pokemons} from "@/clases/Pokemon"
import {pokemonForms, PokemonForm} from "@/clases/PokemonForm"
import {moves, Move} from "@/clases/moves"
import {Team} from "@/clases/Team"
import {Trainer} from "@/clases/Trainer"
import { damageCalculate, tirarMoneda, turno,descargarPokemons,descargarPokemonsBaseDeDatos } from "@/funciones/funciones";
import { useState, useEffect } from "react"


//console.log(damageCalculate(pokemons[1],pokemons[0],moves[0]))

export default function Home() {

  return (
    <div >
     <button onClick={descargarPokemonsBaseDeDatos}>descargarPokemons</button>
    </div>
  );
}
