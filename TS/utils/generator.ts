import { Team } from '../models/Team.js';
import { Striker, MidFielder, Defender, GoalKeeper, Player } from '../models/Player.js';
import { TEAMS, PLAYERS } from '../data/defaults.js';

const getRandomElement = <T>(arr: T[]): T => {
    return arr[Math.floor(Math.random() * arr.length)]!;
};

const excludeList: number[] = [];

const getRandomNumber = (): number => {
    let number: number;
    do {
        number = Math.floor(Math.random() * 99) + 1;
    } while (excludeList.includes(number));

    excludeList.push(number);
    return number;
};

export function generateRandomTeam(excludeName: string = ""): Team {
    const availableTeams:string[] = TEAMS.filter(name => name !== excludeName);
    const teamName: string = getRandomElement(availableTeams);
    const team :Team= new Team(teamName);

    const goalkeeperName: string = getRandomElement(PLAYERS.goalkeepers);
    team.addPlayer(new GoalKeeper(goalkeeperName, getRandomNumber()));

    // Add 3 Strikers, 3 Midfielders, and 3 Defenders 
    for (let i = 0; i < 3; i++) {
        const strikerName:string = getRandomElement(PLAYERS.strikers);
        const midFielderName:string = getRandomElement(PLAYERS.midfielders);
        const defenderName:string = getRandomElement(PLAYERS.defenders);

        team.addPlayer(new Striker(strikerName, getRandomNumber()));
        team.addPlayer(new MidFielder(midFielderName, getRandomNumber()));
        team.addPlayer(new Defender(defenderName, getRandomNumber()));
    }

    if (Math.random() > 0.5) {
        const midFielderName:string = getRandomElement(PLAYERS.midfielders);
        team.addPlayer(new MidFielder(midFielderName, getRandomNumber()));
    } else {
        const defenderName:string = getRandomElement(PLAYERS.defenders);
        team.addPlayer(new Defender(defenderName, getRandomNumber()));
    }

    excludeList.splice(0, excludeList.length);

    return team;
}
