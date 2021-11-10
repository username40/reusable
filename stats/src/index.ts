// for correct work install type definition files
// npm i @types/node
// import fs from 'fs';
import { CsvFileReader } from "./CsvFileReader";


const reader = new CsvFileReader('football.csv')
reader.read()

// enum
enum MatchResult {
	HomeWin = 'H',
	AwayWin = 'A',
	Draw = 'D'
}

let manUnitedWins = 0

for (let match of reader.data) {
	if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
		manUnitedWins++;
	} else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
		manUnitedWins++;
	}
}

console.log(`Manchester United win: ${manUnitedWins} times`);