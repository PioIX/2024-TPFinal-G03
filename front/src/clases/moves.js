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
    new Move("water gun",40,100,25,"special","water","",0),
    new Move("dragon-pulse",85,100,10,"special","dragon", "",0),
    new Move("dragon-claw",80,100,15,"physical","dragon", "",0),
    new Move("thunderbolt",90,100,10,"special","electric","paralisys",10),
    new Move("Sape",900,100,10,"physical","normal"),
    new Move("power-up-punch",40,100,20,"physical","fighting","raiseAtk1",100),
    new Move("toxic",0,90,15,"status","poison","",""),
    new Move("protect",100,16,"status","normal","protect"),
    new Move("return",102,100,32,"physical","normal"),
    new Move("flare-blitz",120,100,24,"physical","fire","lowBothDef",100),
    new Move("overheat",130,90,8,"special","fire","low2SPA",100), 
    new Move("flamethrower",90,100,24,"special","fire","burn",10), 
    new Move("fire-punch",75,100,24,"physical","fire","burn",10), 
    new Move("hydro-pump",110,80,8,"special","water", "",0),
    new Move("surf",90,100,24,"special","water", "",0), 
    new Move("waterfall",80,100,24,"physical","water", "flinch",10),
    new Move("liquidation",85,100,16,"physical","water","lowDef",20), 
    new Move("leaf-blade",90,100,24,"physical","grass","highCritical",100), 
    new Move("giga-drain",75,100,24,"special","grass","heal",100), 
    new Move("energy-ball",90,100,24,"special","grass","lowSPD",10), 
    new Move("leaf-storm",130,90,8,"special","grass","low2SPA",100), 
    new Move("brave-bird",120,100,24,"physical","flying","lowBothDef",100),
    new Move("hurricane",110,70,24,"special","flying","",0),
    new Move("air-slash",75,95,24,"special","flying", "flinch",10),
    new Move("roost",0,100,8,"status","flying","",""),
    new Move("sleep-powder",0,75,8,"status","grass","",""),
    new Move("stun-spore",0,75,8,"status","grass","",""),
    new Move("synthesis",0,100,8,"status","grass","",""),
    new Move("iron-head",80,100,24,"physical","steel", "flinch",10), 
    new Move("flash-cannon",80,100,24,"special","steel","lowSPD",10), 
    new Move("bullet-punch",40,100,24,"physical","steel","priority",100), 
    new Move("ice-beam",90,100,24,"special","ice","freeze",10), 
    new Move("icicle-crash",85,90,24,"physical","ice", "flinch",30), 
    new Move("triple-axel",120,72,24,"physical","ice", "",0), 
    new Move("blizzard",110,70,24,"special","ice","freeze",10),
    new Move("drill-run",80,100,24,"physical","ground","highCritical",100), 
    new Move("earth-power",90,100,24,"special","ground","lowSPD",10), 
    new Move("earthquake",100,100,24,"physical","ground","",0),
    new Move("headlong-rush",120,100,24,"physical","ground","lowBothDef",100),
    new Move("thunder",110,70,24,"special","electric","paralisys",10),
    new Move("thunderbolt",90,100,24,"special","electric","paralisys",10), 
    new Move("thunder-punch",75,100,24,"physical","electric","paralisys",10), 
    new Move("thunder-wave",0,90,8,"status","electric","",""),
    new Move("nuzzle",20,100,24,"physical","electric","paralisys",100), 
    new Move("supercell-slam",120,100,24,"physical","electric","lowBothDef",100),
    new Move("dragon-dance",0,100,32,"status","dragon","",""),
    new Move("outrage",120,100,24,"physical","dragon","lowBothDef",100),
    new Move("draco-meteor",130,90,8,"special","dragon","low2SPA",100),
    new Move("moonblast",95,100,24,"special","fairy","lowSPA",30), 
    new Move("dazzling-gleam",80,100,24,"special","fairy","",0), 
    new Move("moonlight",0,100,8,"status","fairy","",""),
    new Move("play-rough",85,100,24,"physical","fairy","lowATK",30), 
    new Move("close-combat",120,100,24,"physical","fighting","lowBothDef",100),
    new Move("focus-blast",120,70,24,"special","fighting","lowSPD",10),
    new Move("superpower",120,100,24,"physical","fighting","lowDefAtk",100),
    new Move("sacred-sword",90,100,24,"physical","fighting","highCritical",100),
    new Move("aura-sphere",80,100,10,"special","fighting", "",0),
    new Move("bulk-up",0,100,8,"status","fighting","",""),
    new Move("mach-punch",40,100,24,"physical","fighting","priority",100), 
    new Move("stone-edge",100,80,8,"physical","rock","highCritical",100), 
    new Move("power-gem",70,100,10,"special","rock", "",0),
    new Move("bug-buzz",90,100,24,"special","bug","lowSPD",10), 
    new Move("quiver-dance",0,100,32,"status","bug","",""),
    new Move("x-scissor",80,100,15,"physical","bug", "",0),
    new Move("psystrike",100,100,16,"special","psychic","",0),
    new Move("psychic",90,100,24,"special","psychic","lowSPD",10),
    new Move("zen-headbutt",80,90,24,"physical","psychic", "flinch",10), 
    new Move("calm-mind",0,100,32,"status","psychic","",""),
    new Move("cosmic-power",0,100,32,"status","psychic","",""),
    new Move("rest",0,100,8,"status","psychic","",""),
    new Move("amnesia",0,100,32,"status","psychic","",""),
    new Move("gunk-shot",120,80,8,"physical","poison", "poisoned",30), 
    new Move("sludge-wave",95,100,16,"special","poison", "poisoned",10), 
    new Move("sludge-bomb",90,100,16,"special","poison", "poisoned",30), 
    new Move("poison-jab",80,100,8,"physical","poison", "poisoned",30), 
    new Move("poltergeist",110,90,8,"physical","ghost", "",0), 
    new Move("shadow-ball",80,100,24,"special","ghost","lowSPD",20),
    new Move("shadow-sneak",40,100,24,"physical","ghost","priority",100), 
    new Move("shadow-claw",70,100,24,"special","ghost","highCritical",100),
    new Move("curse",0,100,32,"status","ghost","",""),
    new Move("confuse-ray",0,100,32,"status","ghost","",""),
    new Move("glare",0,100,32,"status","normal","",""),
    new Move("sword-dance",0,100,32,"status","normal","",""),
    new Move("boomburst",140,100,8,"special","normal", "",0),
    new Move("hyper-voice",90,100,8,"special","normal", "",0),
    new Move("extreme-speed",70,100,8,"physical","normal","priority",100), 
    new Move("facade",70,100,8,"physical","normal","facade",100), 
    new Move("double-edge",120,100,24,"physical","normal","lowBothDef",100),
    new Move("dark pulse",80,100,8,"special","dark", "flinch",20),
    new Move("knock-off",85,100,8,"physical","dark", "",0),
    new Move("crunch",80,100,8,"physical","dark", "lowDef",20), 
    new Move("sucker-punch",70,100,8,"physical","dark", "suckerPriority",100), 
    new Move("night-slash",70,100,8,"physical","dark", "highCritical",100), 
]