import { moves } from './moves';

const { species } = require('@/clases/Species');
const { pokemonForms } = require('@/clases/PokemonForm');

let idPokemon = 0

function pokeStats(baseStats,evs) {
    let stats = []
    for (let i=0;i<6;i+=1) {
        if (i==0) {
            stats.push(10 + (100/100 * ((baseStats[i]*2) + 31 + evs[i]/4)) + 100)
        }
        else {
            stats.push((5 + (100/100 * ((baseStats[i]*2)+31+evs[i]/4))))
        }
    }
    return stats
} 

function calcularPPs(moveList){
    let retorno = []
    
    for(let i=0;i<moveList.length;i++) {
        retorno.push(moves[moveList[i]].pp)
    }
    return retorno
}

export class Pokemon {
    constructor(form,moves,evs,apodo,idUser) {
        this.form = form;
        this.evs = evs;
        this.stats = pokeStats(this.form.baseStats,this.evs);
        this.statsChanges = [0,0,0,0,0]
        this.life = this.stats[0];
        this.isDefeated = false;
        this.status = "";
        this.isConfused = false;
        this.moves = moves;
        this.id = idPokemon;
        this.priority = 0;
        this.apodo = apodo
        this.combatiendo = false
        this.countDream = 0
        this.pps = calcularPPs(this.moves)
        this.critical = false
        this.idUser = idUser
        this.flinched = false
        idPokemon++;
    }
}


export let pokemons = [
   /* new Pokemon(pokemonForms[0],[0,1,3,6],[4,0,0,252,0,252],pokemonForms[0].name),
    new Pokemon(pokemonForms[1],[0,2,4,5],[4,0,0,252,0,252],pokemonForms[1].name),
    new Pokemon(pokemonForms[1],[0,2,4],[4,252,0,0,0,252],"raul"),
    new Pokemon(pokemonForms[0],[0,1,2,3],[4,0,0,252,0,252],"GODvantula")*/
]

console.log(pokemons)