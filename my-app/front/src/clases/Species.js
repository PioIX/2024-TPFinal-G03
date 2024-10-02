let idSpecies = 0
export class Specie {
    constructor(name){
        this.name = name;
        this.id = idSpecies;
        idSpecies++;
    }
}
export let species = [
    new Specie("galvantula"),
    new Specie("greninja")
 ]