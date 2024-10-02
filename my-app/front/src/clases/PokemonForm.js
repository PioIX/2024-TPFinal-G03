const { species } = require('@/clases/Species');


let idPokemonForms = 0
export class PokemonForm{
    constructor(baseSpecie,ps,atk,def,spa,spd,spe,weight,type1,type2,name){
        this.baseSpecie = baseSpecie;
        this.baseStats = [ps,atk,def,spa,spd,spe];
        this.weight = weight;
        this.type1 = type1;
        this.type2 = type2;
        this.id = idPokemonForms
        this.name=name
        idPokemonForms++;
    }
}

export let pokemonForms = [
new PokemonForm(species[0].id,70,77,60,97,60,108,143,"bug","electric","Galvantula"),
new PokemonForm(species[1],72,95,67,103,71,122,400,"water","dark","Greninja")
]