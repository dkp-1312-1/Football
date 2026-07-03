export class Match {
    constructor(homeTeam, opponentTeam, commentator) {
        this.homeTeam = homeTeam;
        this.opponentTeam = opponentTeam;
        this.commentator = commentator; 
        this.hasBall=1;
    }

    start() {
        this.makeAnnouncement(`Welcome to the match between ${this.homeTeam.name} and ${this.opponentTeam.name}!`);
        
        this.makeAnnouncement(this.homeTeam.players[0].pass(this.homeTeam.players[1]));
        this.makeAnnouncement(this.homeTeam.players[1].performAction());
        this.makeAnnouncement(this.homeTeam.scoreGoal(this.commentator));
        
        this.makeAnnouncement(this.opponentTeam.players[0].pass(this.opponentTeam.players[2]));
        this.makeAnnouncement(this.opponentTeam.players[2].performAction());
        this.makeAnnouncement(this.opponentTeam.scoreGoal(this.commentator));
        
        this.makeAnnouncement(this.homeTeam.players[2].performAction());
        this.makeAnnouncement(this.homeTeam.scoreGoal(this.commentator));

        this.displayResult();
    }

    makeAnnouncement(message) {
        this.commentator.broadcast(message);
    }

    displayResult() {
        this.makeAnnouncement(`Team ${this.homeTeam.name}'s score : ${this.homeTeam.score}`);
        this.makeAnnouncement(`Team ${this.opponentTeam.name}'s score : ${this.opponentTeam.score}`);

        if (this.homeTeam.score > this.opponentTeam.score) {
            this.makeAnnouncement(`${this.homeTeam.name} won the match.`);
        } else if (this.homeTeam.score < this.opponentTeam.score) {
            this.makeAnnouncement(`${this.opponentTeam.name} won the match.`);
        } else {
            this.makeAnnouncement(`Match draw.`);
        }
    }

    randomAction(player1, player2)
    {
        if(Math.random>0.66)
        {
            this.hasBall=this.ball===1?2:1;
        }
        
    }
}
