import { car, cdr } from 'hexlet-pairs';

const readline = require('readline-sync');

const numberOfTimes = 3;

const playGame = (description, getData) => {
  console.log('\nWelcome to the Brain Games!');
  console.log(description);
  const userName = readline.question('\nMay I have your name? ');
  console.log(`Hello, ${userName}!\n`);

  for (let i = 0; i < numberOfTimes; i += 1) {
    const data = getData();
    const question = car(data);
    const rightAnswer = cdr(data);
    console.log(`Question: ${question}`);
    const userAnswer = readline.question('Your answer: ');

    if (userAnswer === rightAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
      return console.log(`\nLet's try again, ${userName}!`);
    }
  }
  return console.log(`\nCongratulations, ${userName}!`);
};

export default playGame;
