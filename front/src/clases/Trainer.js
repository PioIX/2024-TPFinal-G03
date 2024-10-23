let idTrainer =1

export class Trainer {
    constructor(name,team) {
        this.name = name;
        this.team = team;
        this.id = idTrainer;
        idTrainer++;
    }
}

export let trainers = []