import { Player , MidFielder } from "./Player.js";


export class Team {
    // 1. Explicitly declare class properties and their types
    public name: string;
    public players: Player[]; 
    public score: number;

    constructor(name: string) {
        this.name = name;
        this.players = [];
        this.score = 0;
    }

    public addPlayer(player: Player): void {
        this.players.push(player);
    }
    public scoreGoal(): string {
        this.score += 1;
        return `${this.name} scored Goal. Current Score: ${this.score}`;
    }
    public displayTeam(): string {
        let info: string = "";
        this.players.forEach(element => {
            info += `\n${element.name}:${element.number}`;
        });
        return info;
    }

    public getRandomMidFielder(): MidFielder {
        const player = this.players[Math.floor(Math.random() * this.players.length)];
        
        if (player instanceof MidFielder) {
            return player;
        } else {
            return this.getRandomMidFielder();
        }
    }

    public getRandomPlayer(): Player {
        return this.players[Math.floor(Math.random() * this.players.length)]!;
    }
}
