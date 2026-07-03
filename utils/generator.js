import { Team } from '../models/Team.js';
import { Striker, MidFielder, Defender, GoalKeeper } from '../models/Player.js';
import { TEAMS, PLAYERS } from '../data/defaults.js';

// a random array element
const getRandomElement = (arr) => arr[Math.floor(Math.random() * arr.length)];

//  a random jersey number (1 - 99)
const getRandomNumber = () => Math.floor(Math.random() * 99) + 1;

export function generateRandomTeam(excludeName = "") {
    // Pick a team name that isn't the excluded one to avoid identical matchups
    const availableTeams = TEAMS.filter(name => name !== excludeName);
    const teamName = getRandomElement(availableTeams);
    const team = new Team(teamName);

    // Build standard setup: 1 Striker, 1 Defender,1 Midfielder, 1 Goalkeeper
    const strikerName = getRandomElement(PLAYERS.strikers);
    const goalkeeperName = getRandomElement(PLAYERS.goalkeepers);
    const midFielderName=getRandomElement(PLAYERS.midfielders);
    const defenderName=getRandomElement(PLAYERS.defenders);
    const useMidfielder = Math.random() > 0.5;
   
    team.addPlayer(new Striker(strikerName, getRandomNumber()));
    team.addPlayer(new Defender(defenderName,getRandomNumber()));
    team.addPlayer(new MidFielder(midFielderName,getRandomNumber()));
    team.addPlayer(new GoalKeeper(goalkeeperName, getRandomNumber()));

    return team;
}
