"use client"

const { Move, moves } = require("@/clases/moves")
const { Pokemon, pokemons } = require("@/clases/Pokemon")
const { pokemonForms, PokemonForm } = require("@/clases/PokemonForm")
const { species, Specie } = require("@/clases/Species")
const { Team,teams } = require("@/clases/Team")
const { trainers, Trainer } = require("@/clases/Trainer")
import { useState, useEffect } from "react"

// Pedido a la POKEAPI


let hoal = 0

async function subirPokemon(pokemon) {
    const data = {
        Id:pokemon.Id,
        ps:pokemon.ps,
        atk:pokemon.atk,
        def:pokemon.def,
        spa:pokemon.spa,
        spd:pokemon.spd,
        spe:pokemon.spe,
        name:pokemon.name,
        weight:pokemon.weight,
        type1:pokemon.type1,
        type2:pokemon.type2,
        spriteFront:pokemon.spriteFront,
        spriteBack:pokemon.spriteBack

    }
    //Envio un pedido POST con un JSON en el body
    
    const response = await fetch('http://localhost:3001/insertarPokemons', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
    

}

async function subirMov(idPokemon,mov) {
    const data = {
        Id:idPokemon,
        moves:mov

    }
    //Envio un pedido POST con un JSON en el body
    
    const response = await fetch('http://localhost:3001/insertarMoves', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })

}


/*export async function descargarMovimientos() {
    let id = 0
    let mov = ""
    let pedido = ""
    let moves = []
    for (let i = 1;i<1026;i++) {
        pedido = 'https://pokeapi.co/api/v2/pokemon/'+i
            const response = await fetch(pedido,{
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            })
            const result = await response.json();
          id = i
        for (let x = 0;x<result.moves.length;x++) {
            moves.push(result.moves[x].move.name)

        }
        subirMov(id,moves)
        await sleep(10);
        moves = []
    }
}*/

async function sleep(ms) {
    return new Promise((res) => {
        setTimeout(() => res(), ms);
    })
}

export async function descargarPokemons() {
    if (hoal == 0) {
        let check = false
        let id = 0
        let ps = 0
        let atk = 0
        let def = 0
        let spa = 0
        let spd = 0
        let spe = 0
        let weight = 0
        let type1 = ""
        let type2 = ""
        let name = ""
        let pedido = ""
        let spriteFront = ""
        let spriteBack = ""
        let pkmn = {id:0,ps:0,atk:0,def:0,spa:0,spd:0,spe:0,weight:0,type1:"",type2:"",name:"",spriteFront:"",spriteBack:""}
        for (let x = 1;x<1026;x++) {
            pedido = 'https://pokeapi.co/api/v2/pokemon/'+x
            const response = await fetch(pedido,{
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            })
            const result = await response.json();
            ps = result.stats[0].base_stat
            atk = result.stats[1].base_stat
            def = result.stats[2].base_stat
            spa = result.stats[3].base_stat
            spd = result.stats[4].base_stat
            spe = result.stats[5].base_stat
            weight = result.weight
            spriteFront = result.sprites.front_default
            spriteBack = result.sprites.back_default
            id = (x-1)
            
            if (result.types.length == 1){
                type1 = result.types[0].type.name
                type2 = ""
            }
            else {
                type1 = result.types[0].type.name
                type2 = result.types[1].type.name
            }
            name = result.name
        
            pkmn = {Id:id,ps:ps,atk:atk,def:def,spa:spa,spd:spd,spe:spe,weight:weight,type1:type1,type2:type2,name:name,spriteFront:spriteFront,spriteBack:spriteBack}
            console.log("Imprimo los pokemones recibidos: ",pkmn)
            subirPokemon(pkmn)
            console.log(x)
        }
    }
    
    hoal++
}
function ponerPokemonEnLaLista(pokemon,z,movs) {
    let moves = []
    if (pokemonForms[z] == undefined) {
        for (let i = 0;i<movs.length;i++) {
            moves.push(movs[i].move)
        }
        pokemonForms.push(new PokemonForm(pokemon.ps,pokemon.atk,pokemon.def,pokemon.spa,pokemon.spd,pokemon.spe,pokemon.weight,pokemon.type1,pokemon.type2,pokemon.name,moves))
    }
    moves = []
}

export async function descargarPokemonsBaseDeDatos() {    //Llamo a un pedido Get del servidor
    console.log("hoal")
    let Id=0
    let pedido = ""
    const response = await fetch('http://localhost:3001/pokemons', {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    })
    const result = await response.json();
    
    

    for (let i = 0; i < 9; i++) {
        Id = i+1
        pedido = 'http://localhost:3001/pokemonMovs?Id='+Id
        const responseMovs = await fetch(pedido, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
            // body: JSON.stringify(data),
        })
        const movs = await responseMovs.json();
        ponerPokemonEnLaLista(result[i],i,movs)
    }
    console.log(pokemonForms)
    return pokemonForms
}


export async function pureba(){
    const data = {
        Id: is+1
    }

    const responseMovs = await fetch('http://localhost:3001/pokemonMovs', {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
    result = await responseMovs.json();
    console.log(responseMovs)
}


export function encontrarMov(pokemon){
    let check = false
    let finish = false
}

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
    let damage = Math.round((pokemon.stats[0] / 16) + (turnosEnvenenamientoGrave * (pokemon.stats[0] / 16)))
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

function movsDeEstado(pkm1, pkm2, mov) {
        switch(mov.name) {
            case "toxic":
                if ((pkm2.type1 != "poison" || pkm2.type2 != "poison") && (pkm2.type1 != "steel" || pkm2.type2 != "steel") && pkm2.status==""){
                    pkm2.status = "BadlyPoisoned"
                    console.log(pkm1.apodo, "usó ",mov.name," contra ",pkm2.apodo, ", ahora está gravemente envenenado")
                }
                else {
                    console.log(pkm1.apodo, "usó ",mov.name," contra ",pkm2.apodo, ", pero no le afectó...")
                }
        }
    }


export function ejecutarMovimiento(pkm1, pkm2, mov,pp) {
    let dmg = 0
    let indice1critico = 4.16
    if (Math.round(Math.random()*100) <= mov.accuracy || ((pkm1.type1 == "poison" || pkm1.type2 == "poison") && mov.name == "toxic")) {
        if (mov.category == "status"){
            movsDeEstado(pkm1, pkm2, mov)
        }
        else {
            if (Math.random()*100 <= indice1critico){
                console.log(pkm1.apodo, "va a hacer un golpe critico")
                pkm1.critical = true
            }
            dmg = damageCalculate(pkm1,pkm2,mov)
            console.log(pkm1.apodo, " usó ", mov.name, " contra ", pkm2.apodo, " y le hizo ", dmg, " puntos de daño")
            efectoSecundarioPostGolpe(pkm1,pkm2,mov)
            if (survival(pkm2,dmg)) {
                console.log(pkm2, " cayó debilitado")
            }
        }
        console.log(pkm1.pps[pp])
        pkm1.pps[pp] --
    }
    else{
        console.log(pkm1, " usó ",mov," pero falló!!!!")}
}

export function terminarCombate(equipo1,equipo2){
    let resultado = [true,false,false] 
    // el primer espacio representa si la batalla sigue
    // el segundo espacio es si el primer equipo sigue teniendo pokemons, y el tercero es lo mismo con el segundo
    for (let i = 0; i < equipo1.length; i++) {
        if (equipo1[i].isDefeated == false) {
            resultado[1] = true
        }
    }
    for (let i = 0; i < equipo2.length; i++) {
        if (equipo2[i].isDefeated == false) {
            resultado[2] = true
        }
    }
    if (resultado[1] == false || resultado[2] == false) {
        resultado[0] = false
    }
    return resultado
}

export function turno(pkm1, pkm2, mov1,mov2,pokemonACambiar1,pokemonACambiar2,equipo1,equipo2,movPropio,movRival) {
    // esta cosa es un pecado de la programación, pero no encuentro otra forma
    let pokemon1 = pkm1
    let pokemon2 = pkm2
    let comprobarCombate = []
    if (ordenTurno(pokemon1, pokemon2,mov1,mov2) == 1) {
        
        if (mov1 == "change") {
            console.log(pokemon1.apodo, " cambió por ", pokemonACambiar1.apodo)
            pokemon1 = pokemonACambiar1
            pokemon1.statsChanges=[0,0,0,0,0]
        }
        else if(impedimentosMovimiento(pokemon1)) {
            ejecutarMovimiento(pokemon1,pokemon2,mov1,movPropio) 
        }
        if (mov2 == "change") {
            console.log(pokemon2.apodo, " cambió por ", pokemonACambiar2.apodo)
            pokemon2 = pokemonACambiar2
            pokemon2.statsChanges=[0,0,0,0,0]
        }
        else if (pokemon2.isDefeated == false && impedimentosMovimiento(pokemon2)) {
            ejecutarMovimiento(pokemon2,pokemon1,mov2,movRival)

        }
    }
    else {
        if (mov2 == "change") {
            console.log(pokemon2.apodo, " cambió por ", pokemonACambiar2.apodo)
            pokemon2 = pokemonACambiar2
            pokemon2.statsChanges=[0,0,0,0,0]
        }
        else if (impedimentosMovimiento(pokemon2)) {
            ejecutarMovimiento(pokemon2,pokemon1,mov2,movRival)
        }
        if (mov1 == "change") {
            console.log(pokemon1.apodo, " cambió por ", pokemonACambiar1.apodo)
            pokemon1 = pokemonACambiar1
            pokemon1.statsChanges=[0,0,0,0,0]
        }
        else if (pokemon1.isDefeated == false && impedimentosMovimiento(pokemon1)){
            ejecutarMovimiento(pokemon1,pokemon2,mov1,movPropio)
        }
    }
    if (pokemon1.isDefeated == false) {
        dañoPostTurno(pokemon1)
    }
    if (pokemon2.isDefeated == false) {
        dañoPostTurno(pokemon2)
    }
    comprobarCombate = terminarCombate(equipo1,equipo2)
    return([pokemon1,pokemon2,comprobarCombate])
}