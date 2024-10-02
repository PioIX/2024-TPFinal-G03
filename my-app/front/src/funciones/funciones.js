"use client"

const { Move, moves } = require("@/clases/moves")
const { Pokemon, pokemons } = require("@/clases/Pokemon")
const { pokemonForms, PokemonForm } = require("@/clases/PokemonForm")
const { species, Specie } = require("@/clases/Species")
const { Team,teams } = require("@/clases/Team")
const { trainers, Trainer } = require("@/clases/Trainer")

console.log(pokemons)
let Raul = new Trainer("Clara",new Team(pokemons[1],"ou"))
let player = new Trainer("Player",new Team(pokemons[0],"ou"))

console.log(player)

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
    let e = 1
    let b = 1
    let v = Math.round(Math.random()*(100-85)+parseInt(85))
    if (user.form.type1 == move.type|| user.form.type2 == move.type) {
        b = 1.5
    }
    let damage = 0.01 * b * e * v * ((((0.2 * 100 + 1)*user.stats[3]*move.power)/(25*enemy.stats[4]))+2)
    return damage
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
