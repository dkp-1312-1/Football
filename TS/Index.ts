import { EnglishCommentor } from "./models/Commentator.js";
import {Match} from "./models/Match.js";
import {generateRandomTeam} from "./utils/generator.js";

const defaultCommentator:EnglishCommentor=new EnglishCommentor();

//Create fully randomized teams

const homeTeam=generateRandomTeam();
const opponentTeam=generateRandomTeam(homeTeam.name);

//Create and Start match
const matchLeague=new Match(homeTeam,opponentTeam,defaultCommentator);
matchLeague.start();