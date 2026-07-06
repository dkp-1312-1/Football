import { MidFielder } from "./Player.js";

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

    //Display Player's information
    displayTeam()
    {
        var info="";
        this.players.forEach(element => 
        {
            info+=`\n${element.name}:${element.number}`
        });
        return info;
    }
    //Get Random midfielder to tackle ball from another team
    getRandomMidFielder()
    {
        const player=this.players[Math.floor(Math.random() * this.players.length)];
        if(player instanceof MidFielder)
        {
            return player;
        }
        else
            return this.getRandomMidFielder();
    }
    //Get random player of same team to pass 
    getRandomPlayer()
    {
        return this.players[Math.floor(Math.random() * this.players.length)];
    }
}
