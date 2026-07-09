import { EnglishCommentor } from "./models/Commentator.js";
import {Match} from "./models/Match.js";
import { Team } from "./models/Team.js";
import {generateRandomTeam} from "./utils/generator.js";

const defaultCommentator:EnglishCommentor=new EnglishCommentor();

//Create fully randomized teams

const homeTeam:Team=generateRandomTeam();
const opponentTeam:Team=generateRandomTeam(homeTeam.name);

//Create and Start match
const matchLeague:Match=new Match(homeTeam,opponentTeam,defaultCommentator);
matchLeague.start();