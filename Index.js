class Commentator {
    broadcast(message) {
        throw new Error("broadcast() must be implemented");
    }
}
class EnglishCommentor extends Commentator {
    broadcast(message) {
        console.log(`Message: ${message}`);
    }
}
class Player {
    constructor(name, number) {
        if (this.constructor === Player) {
            throw new Error("Abstract class 'Player' cannot be instantiated directly.");
        }
        this.name = name;
        this.number = number;
    }
    run() {
        console.log(`${this.name} is running...`);
        return `${this.name} is running...`;
    }
    pass(player) {
        console.log(`${this.name} is Passing to ${player.name}`);
        return `${this.name} is passing to ${player.name}`;
    }
    celebrate() {
        console.log(`${this.name} is celebrating...`);
        return `${this.name} is celebrating...`;
    }
    performAction() {
        throw new Exception(`performAction must be impelmented`)
    }
}
class Striker extends Player {
    performAction() {
        console.log(`${this.name} made good shoot...`);
        return `${this.name} made good shot...`;
    }
}
class MidFielder extends Player {
    performAction() {
        console.log(`${this.name} tackling goal...`);
        return `${this.name} tackling goal...`;
    }
}
class Defender extends Player {
    performAction() {
        console.log(`${this.name} saving goal...`);
        return `${this.name} saving goal...`;
    }
}
class GoalKeeper extends Player {
    performAction() {
        console.log(`${this.name} making long pass...`);
        return `${this.name} making long pass`;
    }
}
class Team {
    constructor(name) {
        this.name = name;
        this.players = [];
        this.score = 0;
    }
    addPlayer(player) {
        this.players.push(player);
    }
    scoreGoal(commentator) {
        this.score += 1;
        commentator.broadcast(`${this.name} scored Goal.Current Score:${this.score}`);
    }
}

class Match {
    constructor(homeTeam, opponentTeam, commentator) {
        this.homeTeam = homeTeam;
        this.opponentTeam = opponentTeam;
        this.commentator = commentator;
    }
    start() {
        this.commentator.broadcast(`Welcome to the match between ${this.homeTeam.name} and ${this.opponentTeam.name}!`);
        this.homeTeam.players[0].pass(this.homeTeam.players[1]);
        this.makeAction(this.homeTeam.players[1].performAction());
        this.homeTeam.scoreGoal(this.commentator);
        this.opponentTeam.players[0].pass(opponentTeam.players[2]);
        this.makeAction(this.opponentTeam.players[2].performAction());
        this.opponentTeam.scoreGoal(this.commentator);
        this.makeAction(this.homeTeam.players[2].performAction());
        this.homeTeam.scoreGoal(this.commentator);

        this.displayResult();
    }
    makeAction(message) {
        this.commentator.broadcast(message);
    }
    displayResult() {
        this.commentator.broadcast(`Team ${homeTeam.name}'s score : ${this.homeTeam.score}`);
        this.commentator.broadcast(`Team ${opponentTeam.name}'s score : ${this.opponentTeam.score}`);

        if (this.homeTeam.score > this.opponentTeam.score) {
            this.commentator.broadcast(`${this.homeTeam.name} won the match.`);
        }
        else if (this.homeTeam.score < this.opponentTeam.score) {
            this.commentator.broadcast(`${this.opponentTeam.name} won the match.`);
        }
        else {
            this.commentator.broadcast(`Match draw.`);
        }
    }
}

const defaultCommentator = new EnglishCommentor();
const homeTeam = new Team("Red Team");
homeTeam.addPlayer(new Striker("John", 10));
homeTeam.addPlayer(new Defender("Suresh", 54));
homeTeam.addPlayer(new GoalKeeper("Minesh", 48));

const opponentTeam = new Team("Blue Team");
opponentTeam.addPlayer(new Striker("Abhishek", 63));
opponentTeam.addPlayer(new GoalKeeper("Milan", 12));
opponentTeam.addPlayer(new MidFielder("Jeet", 35));

const matchLeague = new Match(homeTeam, opponentTeam, defaultCommentator);
matchLeague.start();