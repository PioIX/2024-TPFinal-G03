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
    new Move("dragon-pulse",85,100,10,"special","dragon", "",0),
    new Move("dragon-claw",80,100,15,"physical","dragon", "",0),
    new Move("thunderbolt",90,100,10,"special","electric","paralisys",10),
    new Move("Sape",900,100,10,"physical","normal"),
    new Move("power-up-punch",40,100,20,"physical","fighting","raiseAtk1",100),
    new Move("toxic","",90,1,"status","poison","",""),
    new Move("protect",100,16,"status","normal","protect"), //FALTA HACER EL EFECTO
    new Move("substitute",100,16,"status","normal","substitute"),//FALTA HACER EL EFECTO
    new Move("return",102,100,32,"physical","normal"),
    new Move("flare-blitz",120,100,24,"physical","fire","returnDamage",100),
    new Move("overheat",130,90,8,"sprecial","fire","low2SPA",100),
    new Move("eruption",150,100,24,"special","fire","calculateByLife",100),
    new Move("flamethrower",90,100,24,"special","fire","burn",10),
    new Move("fire-punch",75,100,24,"physical","fire","burn",10),
    new Move("hydro-pump",110,80,8,"special","water"),
    new Move("surf",90,100,24,"special","water"),
    new Move("waterfall",80,100,24,"physical","water"),
    new Move("liquidation",85,100,16,"physical","water","lowEnemyDef",20)
]