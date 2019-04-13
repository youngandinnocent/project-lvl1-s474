import game from '..';

import {
  makePair, getA, getC, firstNum, secondNum,
} from '../utils';

const gameName = 'Find the greatest common divisor of given numbers.';

const space = '';

// здесь будет функция адаптации генератора под выпадение зависимых по делителю чисел
// для частоты выпадения

const method = () => makePair(firstNum(), space, secondNum());

const calculation = (question) => {
  const num1 = getA(question);
  const num2 = getC(question);
  let divisor = num1 < num2 ? num1 : num2;
  while (num1 % divisor !== 0 || num2 % divisor !== 0) {
    divisor -= 1;
  }
  return divisor;
};

const corrAnswer = question => String(calculation(question));

const gcd = () => game(gameName, method, corrAnswer);

export default gcd;
