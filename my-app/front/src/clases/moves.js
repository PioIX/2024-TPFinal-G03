class Move {
    constructor(name,power,accuracy,pp,category,type) {
        this.name = name
        this.power = power;
        this.accuracy = accuracy;
        this.pp = pp;
        this.category = category;
        this.type = type
    }
    
}

let moves = [new Move ("water gun",40,100,25,"special","water"),new Move("Dragon pulse",85,100,10,"special","dragon"),new Move("Dragon claw",80,100,15,"physical","dragon")]