export class Player {
    constructor(name, number) {
        if (this.constructor === Player) {
            throw new Error("Abstract class 'Player' cannot be instantiated directly.");
        }
        this.name = name;
        this.number = number;
    }
    returnName()
    {
        //Return Name and Jersey Number differentiate by Colon
        return `${this.name}:${this.number}`;
    }
    run() {
        return `${this.returnName()} is running...`;
    }

    pass(player) {
        return `${this.returnName()} is Passing to ${player.returnName()}`;
    }

    celebrate() {
        return `${this.returnName()} is celebrating...`;
    }

    performAction() {
        throw new Error("performAction must be implemented");
    }
}

export class Striker extends Player {
    performAction() {
        return `${this.returnName()} made good shot...`;
    }
}

export class MidFielder extends Player {
    performAction() {
        return `${this.returnName()} tackling goal...`;
    }
}

export class Defender extends Player {
    performAction() {
        return `${this.returnName()} saving goal...`;
    }
}

export class GoalKeeper extends Player {
    performAction() {
        return `${this.returnName()} making long pass`;
    }
}
