import { cons, car, cdr } from 'hexlet-pairs';

import game from '..';

import random from '../utils';

const gameName = 'What is the result of the expression?';

const makeExpress = (num1, oper, num2) => cons(num1, cons(oper, num2));

/*
"Получение исходных значений - это очень простая операция - генерация случайного числа.
После этого вы можете манипулировать присвоенными значениями." - что вы подразумеваете, о чем речь?
*/
const firstNum = () => random();

const secondNum = () => random();
//
const getNum1 = express => car(express);

const getNum2 = express => cdr(cdr(express));

const getOper = express => car(cdr(express));

export const toString = express => `${getNum1(express)} ${getOper(express)} ${getNum2(express)}`;

const arrayOper = ['+', '-', '*'];

const firstOperIndex = 0;

const lastOperIndex = 2;

const operation = () => {
  const rand = Math.floor(firstOperIndex + Math.random() * (lastOperIndex + 1 - firstOperIndex));
  return String(arrayOper[rand]);
};

const calculation = (express) => {
  switch (getOper(express)) {
    case '+':
      return getNum1(express) + getNum2(express);
    case '-':
      return getNum1(express) - getNum2(express);
    default:
      return getNum1(express) * getNum2(express);
  }
};

const method = () => makeExpress(firstNum(), operation(), secondNum());

const corrAnswer = question => String(calculation(question));

const calc = () => game(gameName, method, corrAnswer);

export default calc;
