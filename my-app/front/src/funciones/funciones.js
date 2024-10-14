"use client"

const { Move, moves } = require("@/clases/moves")
const { Pokemon, pokemons } = require("@/clases/Pokemon")
const { pokemonForms, PokemonForm } = require("@/clases/PokemonForm")
const { species, Specie } = require("@/clases/Species")
const { Team,teams } = require("@/clases/Team")
const { trainers, Trainer } = require("@/clases/Trainer")
import { useState, useEffect } from "react"

let turnosEnvenenamientoGrave = 0



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

function changeStatsCalculate(pokemon,stat) {
    return (pokemon.stats[stat] + (pokemon.stats[stat] * pokemon.statsChanges[stat-1])*0.5)
}

export function damageCalculate(user,enemy,move) {
    let userStats = {atk:0,def:0,spa:0,spd:0}
    let enemyStats = {atk:0,def:0,spa:0,spd:0}
    let multiplicadorCritico = 1
    userStats.atk = changeStatsCalculate(user,1)
    userStats.def = changeStatsCalculate(user,2)
    userStats.spa = changeStatsCalculate(user,3)
    userStats.spd = changeStatsCalculate(user,4)
    enemyStats.atk = changeStatsCalculate(enemy,1)
    enemyStats.def = changeStatsCalculate(enemy,2)
    enemyStats.spa = changeStatsCalculate(enemy,3)
    enemyStats.spd = changeStatsCalculate(enemy,4)

    if (user.critical == true){
        multiplicadorCritico =1.5
        if(user.statsChanges[0] < 0 || user.statsChanges[2] < 0){
            userStats.atk = user.stats[1]
            userStats.spa = user.stats[3]
        }
        if(enemy.statsChanges[1] > 0 || enemy.statsChanges[3] > 0) {
            enemyStats.def = enemy.stats[2]
            enemyStats.spd = enemy.stats[4]
        }
    }

    if (user.status == "burn"){
        userStats.atk = userStats.atk/2
    }

    let efectividad = calcularEfectividad(move,enemy)
    let boost = 1
    let variacion = Math.round(Math.random()*(100-85)+parseInt(85))
    let damage = 0
    if (user.form.type1 == move.type|| user.form.type2 == move.type) {
        boost = 1.5
    }
    if (move.category == "special"){ 
        damage = Math.round (0.01 * boost * efectividad * variacion * ((((0.2 * 100 + 1)*userStats.spa*move.power)/(25*enemyStats.spd))+2))
    }
    else if (move.category == "physical") {
        damage = Math.round (0.01 * boost * efectividad * variacion * ((((0.2 * 100 + 1)*userStats.atk*move.power)/(25*enemyStats.def))+2))
    }
    damage = Math.round(damage * multiplicadorCritico)
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
        turnosEnvenenamientoGrave = 0
        return true
    }
    else {
        pokemon.life = pokemon.life - damage
        return false
    }
}

export function calcularVeneno(pokemon){
    let damage = Math.round(pokemon.stats[0] / 16)
    console.log(pokemon.apodo, " resiente el envenenamiento.")
    if(survival(pokemon,damage)) {
        console.log(pokemon, " cayó debilitado")
    }
}

export function burn(pokemon){
    let damage = Math.round(pokemon.stats[0] / 16)
    console.log(pokemon.apodo, " resiente las quemaduras.")
    if(survival(pokemon,damage)) {
        console.log(pokemon, " cayó debilitado")
    }
}

export function calcularVenenoGrave(pokemon){
    let damage = Math.round(pokemon.stats[0] / 16) + (turnosEnvenenamientoGrave * (pokemon.stats[0] / 16))
    turnosEnvenenamientoGrave++
    console.log(pokemon.apodo, " resiente el envenenamiento. Parece que va a peor...")
    if(survival(pokemon,damage)) {
        console.log(pokemon, " cayó debilitado")
    }
}

export function freeze(pokemon){
    if(Math.round(Math.random()*100) <= 20) {
        pokemon.status = ""
        console.log(pokemon.apodo," se ha descogelado")
        return true
    }
    else {
        console.log(pokemon.apodo, " sigue congelado")
        return false

    }
}

export function dream(pokemon){
    if (pokemon.countDream == 0) {
        pokemon.status = ""
        console.log(pokemon.apodo, " se ha despertado")
        return true
    }
    else {
        pokemon.countDream = (pokemon.countDream - 1)
        console.log(pokemon.apodo, " sigue dormido")
        return false

    }
}

export function paralisys(pokemon) {
    if(Math.round(Math.random()*100) <= 25) {
        return true
    }
    else {
        console.log(pokemon.apodo, " se paralizó")
        return false

    }
}

export function impedimentosMovimiento(pokemon) {
    let retorno = true
    switch(pokemon.status) { 
        case "freeze":
            retorno = freeze(pokemon)
            break;
        case "dream":
            retorno = dream(pokemon)
            break;
        case "paralized":
            retorno = paralisys(pokemon)
            break;
    }
    return retorno
}

export function dañoPostTurno(pokemon){
    switch(pokemon.status) {
        case "burn":
            burn(pokemon)
            break;
        case "poisoned":
            calcularVeneno(pokemon)
            break;
        case "BadlyPoisoned":
            calcularVenenoGrave(pokemon)
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

// TODOS LOS FOKIN EFECTOS SECUNDARIOS 
function efectoSecundarioPostGolpe(agresor,agredido,move) {
    switch (move.secondaryEffect) {
        // CAMBIOS DE ESTADO
        case "paralisys":
            if (Math.round(Math.random()*100) <= move.probabilities && agredido.status == "" && agredido.form.type1 != "electric" && agredido.form.type2 != "electric") {
                agredido.status = "paralized"
                console.log(agredido.apodo, " ahora está paralizado")
            }
        break;
        case "freeze":
            if (Math.round(Math.random()*100) <= move.probabilities && agredido.status == "" && agredido.form.type1 != "ice" && agredido.form.type2 != "ice" ) {
                agredido.status = "freeze"
                console.log(agredido.apodo, " ahora está congelado")
            }
        break;
        case "burn":
            if (Math.round(Math.random()*100) <= move.probabilities && agredido.status == "" && agredido.form.type1 != "fire" && agredido.form.type2 != "fire") {
                agredido.status = "burn"
                console.log(agredido.apodo, " ahora está quemado")
            }
        break;
        case "poisoned":
            if (Math.round(Math.random()*100) <= move.probabilities && agredido.status == "" && agredido.form.type1 != "poison" && agredido.form.type2 != "poison") {
                agredido.status = "poisoned"
                console.log(agredido.apodo, " ahora está envenenado")
            }
        break;
        case "BadlyPoisoned":
            if (Math.round(Math.random()*100) <= move.probabilities && agredido.status == "" && agredido.form.type1 != "poison" && agredido.form.type2 != "poison") {
                agredido.status = "BadlyPoisoned"
                console.log(agredido.apodo, " ahora está gravemente envenenado")
            }
        break;
        case "dream":
            if (Math.round(Math.random()*100) <= move.probabilities && agredido.status == "") {
                agredido.status = "dream"
                console.log(agredido.apodo, " ahora está dormido")
            }
        break;
        case "raiseAtk1":
            if (Math.round(Math.random()*100) <= move.probabilities && agresor.statsChanges[1] < 6) {
                agresor.statsChanges[0]++
                console.log("El ataque de ",agresor.apodo, " subio en un nivel")
            }
        break;
        case "raiseDef1":
            if (Math.round(Math.random()*100) <= move.probabilities && agresor.statsChanges[2] < 6) {
                agresor.statsChanges[1]++
                console.log("La defensa de ",agresor.apodo, " subio en un nivel")
            }
        break;
        //
    }
}


export function turno(pkm1, pkm2, mov1,mov2,pokemonACambiar1,pokemonACambiar2) {
    // esta cosa es un pecado de la programación, pero no encuentro otra forma
    let pokemon1 = pkm1
    let pokemon2 = pkm2
    let dmg1 = 0
    let dmg2 =0
    let indice1critico = 4.16
    let indice2critico = 4.16
    if (Math.random()*100 <= indice1critico){
        console.log(pokemon1.apodo, "va a hacer un golpe critico")
        pokemon1.critical = true
    }
    if (ordenTurno(pokemon1, pokemon2,mov1,mov2) == 1) {
        
        if (mov1 == "change") {
            console.log(pokemon1.apodo, " cambió por ", pokemonACambiar1.apodo)
            pokemon1 = pokemonACambiar1}
        else if(impedimentosMovimiento(pokemon1)) {
            if (Math.round(Math.random()*100) <= mov1.accuracy) {
                console.log(pokemon1,pokemon2,mov1)
                dmg1 = damageCalculate(pokemon1,pokemon2,mov1)
                console.log(pokemon1.apodo, " usó ", mov1.name, " contra ", pokemon2.apodo, " y le hizo ", dmg1, " puntos de daño")
                efectoSecundarioPostGolpe(pokemon1,pokemon2,mov1)
            }
            else {
                dmg1 = 0
            }
            if (survival(pokemon2,dmg1)) {
                console.log(pokemon2, " cayó debilitado")
            }
        }
        if (mov2 == "change") {
            console.log(pokemon2.apodo, " cambió por ", pokemonACambiar2.apodo)
            pokemon2 = pokemonACambiar2}
        else if (pokemon2.isDefeated == false && impedimentosMovimiento(pokemon2)) {
            if (Math.round(Math.random()*100) <= mov2.accuracy) {
            console.log(pokemon2,pokemon1,mov2)
            dmg2 = damageCalculate(pokemon2,pokemon1,mov2)
            console.log(pokemon2.apodo, " usó ", mov2.name, " contra ", pokemon1.apodo, " y le hizo ", dmg2, " puntos de daño")
            efectoSecundarioPostGolpe(pokemon2,pokemon1,mov2)
            }
           else {
            dmg2 = 0
            }
            if (survival(pokemon1,dmg2)) {
                console.log(pokemon1.apodo, " cayó debilitado")
            }

        }
    }
    else {
        if (mov2 == "change") {
            console.log(pokemon2.apodo, " cambió por ", pokemonACambiar2.apodo)
            pokemon2 = pokemonACambiar2}
        else if (impedimentosMovimiento(pokemon2)) {
            if (Math.round(Math.random()*100) <= mov2.accuracy) {
                dmg2 = damageCalculate(pokemon2,pokemon1,mov2)
                console.log(pokemon2.apodo, " usó ", mov2.name, " contra ", pokemon1.apodo, " y le hizo ", dmg2, " puntos de daño")
                efectoSecundarioPostGolpe(pokemon2,pokemon1,mov2)
                }
               else {
                dmg2 = 0
                }
            if (survival(pokemon1,dmg2)) {
                console.log(pokemon1.apodo, " cayó debilitado")
            }
        }
        if (mov1 == "change") {
            console.log(pokemon1.apodo, " cambió por ", pokemonACambiar1.apodo)
            pokemon1 = pokemonACambiar1}
        else if (pokemon1.isDefeated == false && impedimentosMovimiento(pokemon1)){
            if (Math.round(Math.random()*100) <= mov1.accuracy) {
                dmg1 = damageCalculate(pokemon1,pokemon2,mov1)
                console.log(pokemon1.apodo, " usó ", mov1.name, " contra ", pokemon2.apodo, " y le hizo ", dmg1, " puntos de daño")
                efectoSecundarioPostGolpe(pokemon1,pokemon2,mov1)
            }
            else {
                dmg1 = 0
            }
            if (survival(pokemon2,dmg1)){
                console.log(pokemon2.apodo, " cayó debilitado")
                    
                }
        }
    }
    if (pokemon1.isDefeated == false) {
        dañoPostTurno(pokemon1)
    }
    if (pokemon2.isDefeated == false) {
        dañoPostTurno(pokemon2)
    }
    return([pokemon1,pokemon2])
}