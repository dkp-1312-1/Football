import { GoalKeeper, Player, MidFielder } from "./Player.js";
import { Team } from "./Team.js";
import { Commentator } from "./Commentator.js"; 
import { HasBallState } from "../types.js";

export class Match {
    public homeTeam: Team;
    public opponentTeam: Team;
    public commentator: Commentator;
    public hasBall: HasBallState; 
    public count: number;

    constructor(homeTeam: Team, opponentTeam: Team, commentator: Commentator) {
        this.homeTeam = homeTeam;
        this.opponentTeam = opponentTeam;
        this.commentator = commentator;
        this.hasBall = 1;
        this.count = 0;
    }

    public start(): void {
        // Announce Teams & their Players
        this.makeAnnouncement(`Welcome to the match`);
        this.makeAnnouncement(`Today is Match of ${this.homeTeam.name} vs ${this.opponentTeam.name}!`);
        this.makeAnnouncement(`\n\n${this.homeTeam.name}'s Players:\n${this.homeTeam.displayTeam()}\n\n`);
        this.makeAnnouncement(`\n\n${this.opponentTeam.name}'s Players:\n${this.opponentTeam.displayTeam()}\n\n`);

        // make TOSS & start match
        if (Math.random() > 0.5) {
            this.hasBall = 1;
            this.makeAnnouncement(`${this.homeTeam.name} won the TOSS.`);
            this.randomAction(this.homeTeam.players[1]!, this.homeTeam);
        } else {
            this.hasBall = 2;
            this.makeAnnouncement(`${this.opponentTeam.name} won the TOSS.`);
            this.randomAction(this.opponentTeam.players[1]!, this.opponentTeam);
        }

        this.displayResult();
    }

    // Console through Commentator
    public makeAnnouncement(message: string): void {
        this.commentator.broadcast(message);
    }

    public displayResult(): void {
        // Display Score
        this.makeAnnouncement(`Team ${this.homeTeam.name}'s score : ${this.homeTeam.score}`);
        this.makeAnnouncement(`Team ${this.opponentTeam.name}'s score : ${this.opponentTeam.score}`);

        // Display Result
        if (this.homeTeam.score > this.opponentTeam.score) {
            this.makeAnnouncement(`${this.homeTeam.name} won the match.`);
        } else if (this.homeTeam.score < this.opponentTeam.score) {
            this.makeAnnouncement(`${this.opponentTeam.name} won the match.`);
        } else {
            this.makeAnnouncement(`Match draw.`);
        }
    }

    public randomAction(player: Player, team: Team): void {
        this.count += 1;
        
        // Limit Actions 
        if (this.count > 25) return;

        if (Math.random() <= 0.7) {
            // Making Score by performing Special Action or Passing to another team player
            let anotherPlayer: Player = team.getRandomPlayer();
            
            if (Math.random() > 0.7) {
                // Making Score by performing Special Action
                this.makeAnnouncement(player.performAction());
                if (!(player instanceof GoalKeeper)) {
                    this.makeAnnouncement(team.scoreGoal());
                }
            } else {
                // Passing to another team player
                console.log("pass");
                this.makeAnnouncement(player.pass(anotherPlayer!));
            }
            
            // Make Random Action
            this.makeAnnouncement(this.goesTo(anotherPlayer!.returnName()));
            this.randomAction(anotherPlayer!, team);
        } else {
            // Ball goes to another team (tackle by midfielder)
            this.hasBall = this.hasBall === 2 ? 1 : 2;
            team = this.hasBall === 1 ? this.homeTeam : this.opponentTeam;
            
            let anotherPlayer: MidFielder = team.getRandomMidFielder();
            this.makeAnnouncement(this.takenBy(anotherPlayer.returnName()));
            this.makeAnnouncement(anotherPlayer.performAction());
            
            // Make Random Action
            this.randomAction(anotherPlayer, team);
        }
    }

    // Actions that are needed to inform by Commentator 
    public takenBy(name: string): string {
        return `Ball is taken by ${name}`;
    }

    public goesTo(name: string): string {
        return `Ball goes to ${name}`;
    }
}
