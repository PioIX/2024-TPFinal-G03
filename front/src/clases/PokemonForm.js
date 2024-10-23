const { species } = require('@/clases/Species');


let idPokemonForms = 0
export class PokemonForm{
    constructor(ps,atk,def,spa,spd,spe,weight,type1,type2,name,posibleMovs,spriteFront,spriteBack){
        this.baseStats = [ps,atk,def,spa,spd,spe];
        this.weight = weight;
        this.type1 = type1;
        this.type2 = type2;
        this.id = idPokemonForms
        this.name=name
        this.posibleMovs = posibleMovs
        this.spriteFront = spriteFront
        this.spriteBack = spriteBack
        idPokemonForms++;
    }
}

export let pokemonForms = [
new PokemonForm(70,77,60,97,60,108,14.3,"bug","electric","Galvantula",[],"",""),
new PokemonForm(72,95,67,103,71,122,40.0,"water","dark","Greninja",[],"","")
]