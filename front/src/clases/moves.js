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
    new Move("toxic",0,90,15,"status","poison","",""),
    new Move("protect",100,16,"status","normal","protect"), //FALTA HACER EL EFECTO
    new Move("substitute",100,16,"status","normal","substitute"),//FALTA HACER EL EFECTO
    new Move("return",102,100,32,"physical","normal"),
    new Move("flare-blitz",120,100,24,"physical","fire","lowBothDef",100),//FALTA HACER EL EFECTO va a ser un a bocajarro de tipo fuego
    new Move("overheat",130,90,8,"special","fire","low2SPA",100), //FALTA HACER EL EFECTO
    new Move("eruption",150,100,24,"special","fire","calculateByLife",100), //FALTA HACER EL EFECTO
    new Move("flamethrower",90,100,24,"special","fire","burn",10), //FALTA HACER EL EFECTO
    new Move("fire-punch",75,100,24,"physical","fire","burn",10), //FALTA HACER EL EFECTO
    new Move("hydro-pump",110,80,8,"special","water", "",0),
    new Move("surf",90,100,24,"special","water", "",0), 
    new Move("waterfall",80,100,24,"physical","water", "flinch",10), //FALTA HACER EL EFECTO
    new Move("liquidation",85,100,16,"physical","water","lowEnemyDef",20), //FALTA HACER EL EFECTO
    new Move("leaf-blade",90,100,24,"physical","grass","highCritical",100), 
    new Move("giga-drain",75,100,24,"special","grass","heal",100), 
    new Move("energy-ball",90,100,24,"special","grass","lowSPD",10), 
    new Move("leaf-storm",130,90,8,"special","grass","low2SPA",100), //FALTA HACER EL EFECTO
    new Move("brave-bird",120,100,24,"physical","flying","lowBothDef",100),//FALTA HACER EL EFECTO va a ser un a bocajarro de tipo fuego
    new Move("hurricane",110,70,24,"special","flying","confuse",30),//FALTA HACER EL EFECTO va a ser un a bocajarro de tipo fuego
    new Move("air-slash",75,95,24,"special","flying", "flinch",10), //FALTA HACER EL EFECTO
    new Move("roost",0,100,8,"status","flying","",""),
    new Move("sleep-powder",0,75,8,"status","grass","",""),
    new Move("sleep-powder",0,75,8,"status","grass","",""),
    new Move("stun-spore",0,75,8,"status","grass","",""),
    new Move("strength-sap",0,100,16,"status","grass","",""),
    new Move("synthesis",0,100,8,"status","grass","",""),
    new Move("iron-head",80,100,24,"physical","steel", "flinch",10), //FALTA HACER EL EFECTO
    new Move("flash-cannon",80,100,24,"special","steel","lowSPD",10), 
    new Move("bullet-puch",40,100,24,"physical","steel","priority",100), 
    new Move("steel-beam",140,95,16,"special","steel","halfLifeRecoil",100),
    new Move("ice-beam",90,100,24,"special","ice","freeze",10), 
    new Move("icicle-crash",85,90,24,"physical","ice", "flinch",30), //FALTA HACER EL EFECTO
    new Move("triple-axel",120,72,24,"physical","ice", "",0), //FALTA HACER EL EFECTO
    new Move("blizzard",110,70,24,"special","ice","freeze",10)//FALTA HACER EL EFECTO va a ser un a bocajarro de tipo fuego

]