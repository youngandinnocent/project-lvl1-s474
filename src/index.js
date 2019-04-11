import { evenNumbers } from './even-numbers';

const readline = require('readline-sync');

const welcome = (gameName) => {
  console.log('');
  console.log('Welcome to the Brain Games!');
  if (gameName === evenNumbers) {
    return evenNumbers;
  }
  const userName = readline.question('May I have your name? ');
  return console.log(`Hello, ${userName}!`);
};

export default welcome;
