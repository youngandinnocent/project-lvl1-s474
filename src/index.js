import { isPair } from 'hexlet-pairs';

import { toString } from './utils';

const readline = require('readline-sync');

const sumOfQuestions = 3;

const game = (whatToDo, method, corrAnswer) => {
  console.log('Welcome to the Brain Games!');
  console.log(whatToDo);
  console.log('');
  const userName = readline.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('');
  for (let i = 0; i < sumOfQuestions; i += 1) {
    const question = method();
    console.log(`Question: ${isPair(question) ? toString(question) : question}`);
    const userAnswer = readline.question('Your answer: ');
    if (userAnswer === corrAnswer(question)) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${corrAnswer(question)}'.`);
      return console.log(`Let's try again, ${userName}!`);
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};

export default game;
