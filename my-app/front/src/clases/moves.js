export class Move {
    constructor(name,power,accuracy,pp,category,type,secondaryEffect,probabilities) {
        this.name = name
        this.power = power;
        this.accuracy = accuracy;
        this.pp = pp;
        this.category = category;
        this.type = type
        this.secondaryEffect = secondaryEffect
        this.probabilities = probabilities
    }
    
}

export let moves = [
    new Move ("water gun",40,100,25,"special","water","",0),
    new Move("Dragon pulse",85,100,10,"special","dragon", "",0),
    new Move("Dragon claw",80,100,15,"physical","dragon", "",0),
    new Move("Thunderbolt",90,100,10,"special","electric",["paralisys"],10),
    new Move("Sape",900,100,10,"physical","normal")
]