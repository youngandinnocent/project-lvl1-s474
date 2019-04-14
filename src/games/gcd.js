import game from '..';

import {
  makePair, firstNum, secondNum,
} from '../utils';
import { car, cdr } from 'hexlet-pairs';

const whatToDo = 'Find the greatest common divisor of given numbers.';

const space = '';

// здесь будет функция адаптации генератора под выпадение зависимых по делителю чисел
// для частоты выпадения

const method = () => makePair(firstNum(), space, secondNum());

const calculation = (question) => {
  const num1 = car(question);
  const num2 = cdr(cdr(question));
  let divisor = num1 < num2 ? num1 : num2;
  while (num1 % divisor !== 0 || num2 % divisor !== 0) {
    divisor -= 1;
  }
  return divisor;
};

const corrAnswer = question => String(calculation(question));

const gcd = () => game(whatToDo, method, corrAnswer);

export default gcd;
