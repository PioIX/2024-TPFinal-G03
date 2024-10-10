"use client"

const { Move, moves } = require("@/clases/moves")
const { Pokemon, pokemons } = require("@/clases/Pokemon")
const { pokemonForms, PokemonForm } = require("@/clases/PokemonForm")
const { species, Specie } = require("@/clases/Species")
const { Team,teams } = require("@/clases/Team")
const { trainers, Trainer } = require("@/clases/Trainer")
import { useState, useEffect } from "react"


const tablaDeTipos={
    normal:
        {normal:1,fire:1,water:1,grass:1,electric:1,ice:1,fighting:2,poison:1,
        ground:1,flying:1,psychic:1,bug:1,rock:1,ghost:0,dragon:1,dark:1,steel:1,fairy:1},
    fire:
        {normal:1,fire:0.5,water:2,grass:0.5,electric:1,ice:0.5,fighting:1,poison:1,
        ground:2,flying:1,psychic:1,bug:0.5,rock:2,ghost:0,dragon:1,dark:1,steel:0.5,fairy:0.5},
    water:
        {normal:1,fire:0.5,water:0.5,grass:2,electric:2,ice:0.5,fighting:1,poison:1,
        ground:1,flying:1,psychic:1,bug:1,rock:1,ghost:1,dragon:1,dark:1,steel:0.5,fairy:1},
    grass:
        {normal:1,fire:2,water:0.5,grass:0.5,electric:0.5,ice:2,fighting:1,poison:2,
        ground:0.5,flying:2,psychic:1,bug:2,rock:1,ghost:1,dragon:1,dark:1,steel:1,fairy:1},
    electric:
        {normal:1,fire:1,water:1,grass:1,electric:0.5,ice:1,fighting:1,poison:1,
        ground:2,flying:0.5,psychic:1,bug:1,rock:1,ghost:1,dragon:1,dark:1,steel:1,fairy:1},
    ice:
        {normal:1,fire:2,water:1,grass:1,electric:1,ice:0.5,fighting:2,poison:1,
        ground:1,flying:1,psychic:1,bug:1,rock:2,ghost:1,dragon:1,dark:1,steel:2,fairy:1},
    fighting:
        {normal:1,fire:1,water:1,grass:1,electric:1,ice:1,fighting:1,poison:1,
        ground:1,flying:2,psychic:2,bug:0.5,rock:0.5,ghost:0,dragon:1,dark:0.5,steel:1,fairy:2},
    poison:
        {normal:1,fire:1,water:1,grass:0.5,electric:1,ice:1,fighting:0.5,poison:0.5,
        ground:2,flying:1,psychic:2,bug:0.5,rock:1,ghost:1,dragon:1,dark:1,steel:1,fairy:0.5},
    ground:
        {normal:1,fire:1,water:2,grass:2,electric:0,ice:2,fighting:1,poison:0.5,
        ground:1,flying:1,psychic:1,bug:1,rock:0.5,ghost:1,dragon:1,dark:1,steel:1,fairy:1},
    flying:
        {normal:1,fire:1,water:1,grass:0.5,electric:2,ice:2,fighting:0.5,poison:1,
        ground:0,flying:1,psychic:1,bug:0.5,rock:2,ghost:1,dragon:1,dark:1,steel:1,fairy:1},
    psychic:
        {normal:1,fire:1,water:1,grass:1,electric:1,ice:1,fighting:0.5,poison:1,
        ground:1,flying:1,psychic:0.5,bug:2,rock:1,ghost:2,dragon:1,dark:2,steel:1,fairy:1},
    bug:
        {normal:1,fire:2,water:1,grass:0.5,electric:1,ice:1,fighting:0.5,poison:1,
        ground:0.5,flying:2,psychic:1,bug:1,rock:2,ghost:1,dragon:1,dark:1,steel:1,fairy:1},
    rock:
        {normal:0.5,fire:0.5,water:2,grass:2,electric:1,ice:1,fighting:2,poison:0.5,
        ground:2,flying:0.5,psychic:1,bug:1,rock:1,ghost:0,dragon:1,dark:1,steel:2,fairy:1},
    ghost:
        {normal:0,fire:1,water:1,grass:1,electric:1,ice:1,fighting:0,poison:0.5,
        ground:1,flying:1,psychic:1,bug:0.5,rock:1,ghost:2,dragon:1,dark:2,steel:1,fairy:1},
    dragon:
        {normal:1,fire:0.5,water:0.5,grass:0.5,electric:0.5,ice:2,fighting:1,poison:1,
        ground:1,flying:1,psychic:1,bug:1,rock:1,ghost:1,dragon:2,dark:1,steel:1,fairy:2},
    dark:
        {normal:1,fire:1,water:1,grass:1,electric:1,ice:1,fighting:2,poison:1,
        ground:1,flying:1,psychic:0,bug:2,rock:1,ghost:0.5,dragon:1,dark:0.5,steel:1,fairy:2},
    steel:
        {normal:0.5,fire:2,water:1,grass:0.5,electric:1,ice:0.5,fighting:2,poison:0,
        ground:2,flying:0.5,psychic:0.5,bug:0.5,rock:0.5,ghost:0,dragon:0.5,dark:1,steel:0.5,fairy:0.5},
    fairy:
        {normal:1,fire:1,water:1,grass:1,electric:1,ice:1,fighting:0.5,poison:2,
        ground:1,flying:1,psychic:1,bug:0.5,rock:1,ghost:1,dragon:0,dark:0.5,steel:2,fairy:1}
}
console.log(pokemons)

//let [pokemonPropio, setPokemonPropio] = useState(pokemons[0])
//let [pokemonAjeno, setPokemonAjeno] = useState(pokemons[1])

teams.push(new Team([pokemons[1],pokemons[2]],"ou"),new Team(pokemons[0],pokemons[3],"ou"))


export function tirarMoneda() {
    return Math.floor(Math.random() * 2);
  }

export function chekTrainerHealtyTeam(trainer) {
    check=false
    i=0
    while (check==false){
        if (trainer.team.pokemons[i].isDefeated == false) {
            return true
        }
        i++;
        if (i == trainer.team.pokemons.length) {
            return false
        }
    }
}

export function damageCalculate(user,enemy,move) {
    let efectividad = calcularEfectividad(move,enemy)
    let boost = 1
    let variacion = Math.round(Math.random()*(100-85)+parseInt(85))
    let damage = 0
    if (user.form.type1 == move.type|| user.form.type2 == move.type) {
        boost = 1.5
    }
    damage = Math.round (0.01 * boost * efectividad * variacion * ((((0.2 * 100 + 1)*user.stats[3]*move.power)/(25*enemy.stats[4]))+2))
    
    return damage
}

export function calcularEfectividad(move,pokemon){
    let returnable = 1
    if (pokemon.form.type2 == "") {
        returnable = tablaDeTipos[pokemon.form.type1][move.type]
    }
    else {
        returnable = tablaDeTipos[pokemon.form.type1][move.type] * tablaDeTipos[pokemon.form.type2][move.type]
    }
    return returnable
}

export function survival(pokemon,damage){
    if (pokemon.life <= damage) {
        pokemon.life = 0;
        pokemon.isDefeated = true
        return true
    }
    else {
        pokemon.life = pokemon.life - damage
        return false
    }
}

export function ordenTurno(pokemon1, pokemon2, mov1, mov2) {
    if (mov1 == "change") {
        return 1
    }
    else if (mov2 == "change") {
        return 2
    }
    else {
        if (pokemon1.stats[5] > pokemon2.stats[5]) {
            return 1
        }
        else if (pokemon1.stats[5] < pokemon2.stats[5]) {
            return 2
        }
        else {
            if (tirarMoneda()==1) {
                return 1
            }
            else {
                return 2
            }
        }
    }
}

export function turno(pkm1, pkm2, mov1,mov2,pokemonACambiar1,pokemonACambiar2) {
    let pokemon1 = pkm1
    let pokemon2 = pkm2
    let dmg1 = 0
    let dmg2 =0

   /* let dmg1 = damageCalculate(pokemon1,pokemon2,mov1)
    let dmg2 = damageCalculate(pokemon2,pokemon1,mov2)*/
    if (ordenTurno(pokemon1, pokemon2,mov1,mov2) == 1) {
        if (mov1 == "change") {
            console.log(pokemon1.apodo, " cambió por ", pokemonACambiar1.apodo)
            pokemon1 = pokemonACambiar1}
        else {
            dmg1 = damageCalculate(pokemon1,pokemon2,mov1)
            console.log(pokemon1.apodo, " usó ", mov1.name, " contra ", pokemon2.apodo, " y le hizo ", dmg1, " puntos de daño")
            if (survival(pokemon2,dmg1)) {
                console.log(pokemon2, " cayó debilitado")
            }
        }
        if (mov2 == "change") {
            console.log(pokemon2.apodo, " cambió por ", pokemonACambiar2.apodo)
            pokemon2 = pokemonACambiar2}
        else if (pokemon2.isDefeated == false) {
            dmg2 = damageCalculate(pokemon2,pokemon1,mov2)
            console.log(pokemon2.apodo, " usó ", mov2.name, " contra ", pokemon1.apodo, " y le hizo ", dmg2, " puntos de daño")
            if (survival(pokemon1,dmg2)) {
                console.log(pokemon1, " cayó debilitado")
            }

        }


    
        /*console.log(pokemon1.apodo, " usó ", mov1.name, " contra ", pokemon2.apodo, " y le hizo ", dmg1, " puntos de daño")
        if (!survival(pokemon2,dmg1)) {
            console.log(pokemon2.apodo, " usó ", mov2.name, " contra ", pokemon1.apodo, " y le hizo ", dmg2, " puntos de daño")
            if (survival(pokemon1,dmg2)) {
                console.log(pokemon1.apodo, " cayó debilitado")
            }
        }
        else {
            console.log(pokemon2, " cayó debilitado")
        }
    }
    else {
        console.log(pokemon2.apodo, " usó ", mov2.name, " contra ", pokemon1.apodo, " y le hizo ", dmg2, " puntos de daño")
        if (!survival(pokemon1,dmg2)) {
            console.log(pokemon1.apodo, " usó ", mov1.name, " contra ", pokemon2.apodo, " y le hizo ", dmg1, " puntos de daño")
            if (survival(pokemon2,dmg1)) {
                console.log(pokemon2.apodo, " cayó debilitado")
            }
        }
        else {
            console.log(pokemon1.apodo, " cayó debilitado")
        }*/
    }
    else {
        if (mov2 == "change") {
            console.log(pokemon2.apodo, " cambió por ", pokemonACambiar2.apodo)
            pokemon2 = pokemonACambiar2}
        else {
            dmg2 = damageCalculate(pokemon2,pokemon1,mov2)
            console.log(pokemon2.apodo, " usó ", mov2.name, " contra ", pokemon1.apodo, " y le hizo ", dmg2, " puntos de daño")
            if (survival(pokemon1,dmg2)) {
                console.log(pokemon1, " cayó debilitado")
            }
        }
        if (mov1 == "change") {
            console.log(pokemon1.apodo, " cambió por ", pokemonACambiar1.apodo)
            pokemon1 = pokemonACambiar1}
        else if (pokemon1.isDefeated == false){
            dmg1 = damageCalculate(pokemon1,pokemon2,mov1)
            console.log(pokemon1.apodo, " usó ", mov1.name, " contra ", pokemon2.apodo, " y le hizo ", dmg1, " puntos de daño")
            if (survival(pokemon2,dmg1)) {
                console.log(pokemon2, " cayó debilitado")
            }
        }
    }
    return([pokemon1,pokemon2])
}