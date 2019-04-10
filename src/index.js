import { evenNumbers } from './even-numbers';

const readlineSync = require('readline-sync');
// user response capture
export const request = str => readlineSync.question(str);

const welcome = (gameName) => {
  console.log('');
  console.log('Welcome to the Brain Games!');
  if (gameName === evenNumbers) {
    return console.log(evenNumbers);
  }
  const userName = request('May I have your name? ');
  return console.log(`Hello, ${userName}!`);
};

export default welcome;
