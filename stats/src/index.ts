// for correct work install type definition files
// npm i @types/node
import fs from 'fs';

const matches = fs.readFileSync('football.csv', {
    encoding: 'utf-8'
})
    .split('\n')
    .map((row: string):string[] => row.split(','));

console.log(matches);