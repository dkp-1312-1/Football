export class Team {
    constructor(name) {
        this.name = name;
        this.players = [];
        this.score = 0;
    }

    addPlayer(player) {
        this.players.push(player);
    }
    
    scoreGoal() {
        this.score += 1;
        return `${this.name} scored Goal. Current Score: ${this.score}`;
    }
}