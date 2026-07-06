import { Team } from '../models/Team.js';
import { Striker, MidFielder, Defender, GoalKeeper } from '../models/Player.js';
import { TEAMS, PLAYERS } from '../data/defaults.js';

// a random array element
const getRandomElement = (arr) => arr[Math.floor(Math.random() * arr.length)];
const excludeList=[];
//  a random jersey number (1 - 99)
const getRandomNumber = () =>
    {
        var number=Math.floor(Math.random() * 99) + 1;
        if(excludeList.includes(number))
        {
            return getRandomNumber();
        }
        else
        {
            excludeList.push(number);
            return number;
        }
    } 

export function generateRandomTeam(excludeName = "") {
    // Pick a team name that isn't the excluded one to avoid identical matchups
    const availableTeams = TEAMS.filter(name => name !== excludeName);
    const teamName = getRandomElement(availableTeams);
    const team = new Team(teamName);
    
    
    // Build standard setup: 1 Striker, 1 Defender,1 Midfielder, 1 Goalkeeper
    const goalkeeperName = getRandomElement(PLAYERS.goalkeepers);
    team.addPlayer(new GoalKeeper(goalkeeperName, getRandomNumber()));
    for (let  i = 0; i < 3; i++)
    {
        const strikerName = getRandomElement(PLAYERS.strikers);
        const midFielderName = getRandomElement(PLAYERS.midfielders);
        const defenderName = getRandomElement(PLAYERS.defenders);

        team.addPlayer(new Striker(strikerName, getRandomNumber()));
        team.addPlayer(new MidFielder(midFielderName, getRandomNumber()));
        team.addPlayer(new Defender(defenderName, getRandomNumber()));
       
    }
    //Get one midfielder or one defender
    if(Math.random()>0.5)
    {
        const midFielderName = getRandomElement(PLAYERS.midfielders);
        team.addPlayer(new MidFielder(midFielderName, getRandomNumber()));
    }
    else
    {
        const defenderName = getRandomElement(PLAYERS.defenders);
        team.addPlayer(new Defender(defenderName, getRandomNumber()));
    }
    excludeList.splice(0, excludeList.length);
    return team;
}
