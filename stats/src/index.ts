// for correct work install type definition files
// npm i @types/node
// import fs from 'fs';
import {MatchReader} from "./MatchReader";
import { MatchResult } from "./MatchResult";


const reader = new MatchReader('football.csv')
reader.read()

console.log(reader.data[0][0])



let manUnitedWins = 0

for (let match of reader.data) {
	if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
		manUnitedWins++;
	} else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
		manUnitedWins++;
	}
}

console.log(`Manchester United win: ${manUnitedWins} times`);