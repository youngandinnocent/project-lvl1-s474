import { isPair } from 'hexlet-pairs';

import { toString } from './games/calc';

const intro = 'brainGames';

const readline = require('readline-sync');

export const welcome = (gameName = intro) => {
  console.log('');
  console.log('Welcome to the Brain Games!');
  if (gameName === 'brainGames') {
    const userName = readline.question('May I have your name? ');
    return console.log(`Hello, ${userName}!`);
  } return gameName;
};

const game = (gameName, method, isCorrect, corrAnswer) => {
  console.log(welcome(gameName));
  console.log('');
  const userName = readline.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('');
  const sumOfQuestions = 3;
  for (let i = 0; i < sumOfQuestions; i += 1) {
    const question = method();
    console.log(`Question: ${isPair(question) ? toString(question) : question}`);
    const userAnswer = readline.question('Your answer: ');
    if (isCorrect(question, userAnswer)) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${corrAnswer(question)}'.`);
      return console.log(`Let's try again, ${userName}!`);
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};

export default game;
