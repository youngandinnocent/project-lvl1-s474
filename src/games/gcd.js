import { cons } from 'hexlet-pairs';

import playGame from '..';

import random from '../utils';

const description = 'Find the greatest common divisor of given numbers.';

const getGCD = (num1, num2) => {
  let divisor = num1 < num2 ? num1 : num2;
  while (num1 % divisor !== 0 || num2 % divisor !== 0) {
    divisor -= 1;
  }
  return divisor;
};

const getData = () => {
  const firstNum = random(1, 100);
  const secondNum = random(1, 100);
  const question = `${firstNum} ${secondNum}`;
  const rightAnswer = String(getGCD(firstNum, secondNum));
  return cons(question, rightAnswer);
};

export default () => playGame(description, getData);
