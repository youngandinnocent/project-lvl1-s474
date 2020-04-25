import { cons } from 'hexlet-pairs';

import playGame from '..';

import random from '../utils';

const description = 'Answer "yes" if number even otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const getData = () => {
  const question = random(1, 100);
  const rightAnswer = isEven(question) ? 'yes' : 'no';
  return cons(question, rightAnswer);
};

export default () => playGame(description, getData);
