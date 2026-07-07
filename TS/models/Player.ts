export abstract class Player {
    public name: string;
    public number: number;

    constructor(name: string, number: number) {
        this.name = name;
        this.number = number;
    }

    public returnName(): string {
        return `${this.name}:${this.number}`;
    }

    public run(): string {
        return `${this.returnName()} is running...`;
    }

    public pass(player: Player): string {
        return `${this.returnName()} is Passing to ${player.returnName()}`;
    }

    public celebrate(): string {
        return `${this.returnName()} is celebrating...`;
    }
    
    public abstract performAction(): string;
}

export class Striker extends Player {
    public performAction(): string {
        return `${this.returnName()} made good shot...`;
    }
}

export class MidFielder extends Player {
    public performAction(): string {
        return `${this.returnName()} tackling goal...`;
    }
}

export class Defender extends Player {
    public performAction(): string {
        return `${this.returnName()} saving goal...`;
    }
}

export class GoalKeeper extends Player {
    public performAction(): string {
        return `${this.returnName()} making long pass`;
    }
}
