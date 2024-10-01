import {species,Specie} from "@/clases/Species"

let idPokemonForms = 0
class PokemonForm{
    constructor(baseSpecie,ps,atk,def,spa,spd,spe,abilities,weight,type1,type2,isBase){
        this.baseStats = [ps,atk,def,spa,spd,spe];
        this.abilities = abilities;
        this.weight = weight;
        this.type1 = type1;
        this.type2 = type2;
        this.id = idPokemonForms
        this.isBase = isBase
        this.baseSpecie = baseSpecie;
        idPokemonForms++;
    }
}

let pokemonForms = [
new PokemonForm(species[0],70,77,60,97,60,108,["compound-eyes"],143,"bug","electric",true),
new PokemonForm(species[1],72,95,67,103,71,122,["torrent"],400,"water","dark",true)
]