const {readFileSync, writeFileSync} = require('fs')

const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');

console.log(first, second)

//create a new file to save the text

writeFileSync('./content/result-sync.txt',`here is the result : ${first}, ${second}`,{ flag:'a'})