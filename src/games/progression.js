import { cons } from 'hexlet-pairs';

import playGame from '..';

import random from '../utils';

const description = 'What number is missing in the progression?';

const progressionLength = 10;

const getProgression = (begin, step, indexOfHiddenNum) => {
  let progression = '';
  for (let i = 0; i < progressionLength; i += 1) {
    const space = (i === progressionLength - 1) ? '' : ' ';
    progression += (i === indexOfHiddenNum) ? `..${space}` : `${String(begin + step * i)}${space}`;
  }
  return progression;
};

const getData = () => {
  const begin = random(0, 10);
  const step = random(1, 10);
  const indexOfHiddenNum = random(0, progressionLength - 1);
  const question = getProgression(begin, step, indexOfHiddenNum);
  const rightAnswer = String(begin + step * indexOfHiddenNum);
  return cons(question, rightAnswer);
};

export default () => playGame(description, getData);
