import readline from 'readline-sync';

import welcome from '.';

// export to module 'index' for welcome
export const evenNumbers = 'Answer "yes" if number even otherwise answer "no".';

// вы говорили про эту функцию(isEven)? ('Выделите проверку чётности в отдельную абстракцию.')
const isEven = num => !(num % 2 !== 0);

// random generator
const random = () => Math.round(Math.random() * 100);

// validation response
const correct = (number, answer) => {
  if ((isEven(number) && answer === 'yes') || (!isEven(number) && answer === 'no')) {
    return 'Correct!';
  } return `'${answer}' is wrong answer ;(. Correct answer was ${isEven(number) ? "'yes'" : "'no'"}.`;
};

// game logic
const brainEven = () => {
  console.log(welcome(evenNumbers));
  console.log('');
  const userName = readline.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('');
  let number;
  let answer = '';
  for (let i = 0; i < 3; i += 1) {
    number = random();
    console.log(`Question: ${number}`);
    answer = readline.question('Your answer: ');
    if (correct(number, answer) === 'Correct!') {
      console.log('Correct!');
    } else {
      console.log(correct(number, answer));
      return console.log(`Let's try again, ${userName}!`);
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};

export default brainEven;
