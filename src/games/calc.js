import game from '..';

import {
  makePair, getA, getB, getC, firstNum, secondNum,
} from '../utils';

const gameName = 'What is the result of the expression?';

const arrayOper = ['+', '-', '*'];

const firstOperIndex = 0;

const lastOperIndex = 2;

const operation = () => {
  const rand = Math.floor(firstOperIndex + Math.random() * (lastOperIndex + 1 - firstOperIndex));
  return String(arrayOper[rand]);
};

const method = () => makePair(firstNum(), operation(), secondNum());

const calculation = (express) => {
  switch (getB(express)) {
    case '+':
      return getA(express) + getC(express);
    case '-':
      return getA(express) - getC(express);
    default:
      return getA(express) * getC(express);
  }
};

const corrAnswer = question => String(calculation(question));

const calc = () => game(gameName, method, corrAnswer);

export default calc;
