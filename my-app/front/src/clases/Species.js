let idSpecies = 0
class Specie {
    constructor(name,forms){
        this.name = name;
        this.forms = forms
        this.id = idSpecies;
        idSpecies++;
    }
}
 let species = [
    new Specie("galvantula",["base"]),
    new Specie("greninja",["base","ash"])
 ]