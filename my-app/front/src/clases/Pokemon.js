const { species } = require('@/clases/Species');
const { pokemonForms } = require('@/clases/PokemonForm');

let idPokemon = 1

function pokeStats(baseStats,evs) {
    let stats = []
    for (let i=0;i<6;i+=1) {
        if (i==0) {
            stats.push(10 + (100/100 * ((baseStats[i]*2) + 31 + evs[i]/4)) + 100)
            console.log(stats[0])
        }
        else {
            console.log((5 + (100/100 * ((baseStats[i]*2)+31+evs[i]/4))))
            stats.push((5 + (100/100 * ((baseStats[i]*2)+31+evs[i]/4))))
        }
    }
    return stats
} 

export class Pokemon {
    constructor(form,moves,evs,apodo) {
        this.form = form;
        this.evs = evs;
        this.stats = pokeStats(this.form.baseStats,this.evs);
        this.life = this.stats[0];
        this.isDefeated = false;
        this.status = "";
        this.isConfused = false;
        this.moves = moves;
        this.id = idPokemon;
        this.priority = 0;
        this.apodo = apodo
        this.combatiendo = false
        idPokemon++;
    }
}


export let pokemons = [
    new Pokemon(pokemonForms[0],[0,1,3],[4,0,0,252,0,252],pokemonForms[0].name),
    new Pokemon(pokemonForms[1],[0,2],[4,0,0,252,0,252],pokemonForms[1].name),
    new Pokemon(pokemonForms[1],[0,2],[4,252,0,0,0,252],"raul"),
    new Pokemon(pokemonForms[0],[0,1,3],[4,0,0,252,0,252],"GODvantula")
]