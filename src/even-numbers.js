import { request } from '.';

// export to module 'index' for welcome
export const evenNumbers = 'Answer "yes" if number even otherwise answer "no".';

// validation response utility function
const correct = (number, answer) => {
  if ((number % 2 === 0 && answer === 'yes') || (number % 2 !== 0 && answer === 'no')) {
    return 'Correct!';
  } return `'${answer}' is wrong answer ;(. Correct answer was ${number % 2 === 0 ? "'yes'" : "'no'"}.`;
};

// ask questions to user
const questions = () => {
  console.log(''); // indent string
  const userName = request('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('');
  // first question
  console.log('Question: 15');
  const userAnswer1 = request('Your answer: ');
  const checkAnswer1 = correct(15, userAnswer1);
  if (checkAnswer1 === 'Correct!') {
    console.log('Correct!');
  } else {
    console.log(checkAnswer1);
    return console.log(`Let's try again, ${userName}!`);
  }
  // second question
  console.log('Question: 6');
  const userAnswer2 = request('Your answer: ');
  const checkAnswer2 = correct(6, userAnswer2);
  if (checkAnswer2 === 'Correct!') {
    console.log('Correct!');
  } else {
    console.log(checkAnswer2);
    return console.log(`Let's try again, ${userName}!`);
  }
  // third question
  console.log('Question: 7');
  const userAnswer3 = request('Your answer: ');
  const checkAnswer3 = correct(7, userAnswer3);
  if (checkAnswer3 === 'Correct!') {
    console.log('Correct!');
  } else {
    console.log(checkAnswer3);
    return console.log(`Let's try again, ${userName}!`);
  }
  return console.log(`Congratulations, ${userName}!`);
};

export default questions;
