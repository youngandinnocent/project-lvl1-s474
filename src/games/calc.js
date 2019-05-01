import { cons, car, cdr } from 'hexlet-pairs';

import playGame from '..';

import random from '../utils';

const description = 'What is the result of the expression? Hint: round to nearest.';

const operators = [
  cons('+', (a, b) => a + b),
  cons('-', (a, b) => a - b),
  cons('*', (a, b) => a * b),
  cons('/', (a, b) => Math.round(a / b)),
];

const getData = () => {
  const firstNum = random(1, 100);
  const secondNum = random(1, 100);
  const operator = operators[random(0, operators.length - 1)];
  const sign = car(operator);
  const calculation = cdr(operator);
  const question = `${firstNum} ${sign} ${secondNum}`;
  const rightAnswer = String(calculation(firstNum, secondNum));
  return cons(question, rightAnswer);
};

export default () => playGame(description, getData);
