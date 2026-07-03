export class Player {
    constructor(name, number) {
        if (this.constructor === Player) {
            throw new Error("Abstract class 'Player' cannot be instantiated directly.");
        }
        this.name = name;
        this.number = number;
    }

    run() {
        return `${this.name} is running...`;
    }

    pass(player) {
        return `${this.name} is Passing to ${player.name}`;
    }

    celebrate() {
        return `${this.name} is celebrating...`;
    }

    performAction() {
        throw new Error("performAction must be implemented");
    }
}

export class Striker extends Player {
    performAction() {
        return `${this.name} made good shot...`;
    }
}

export class MidFielder extends Player {
    performAction() {
        return `${this.name} tackling goal...`;
    }
}

export class Defender extends Player {
    performAction() {
        return `${this.name} saving goal...`;
    }
}

export class GoalKeeper extends Player {
    performAction() {
        return `${this.name} making long pass`;
    }
}
