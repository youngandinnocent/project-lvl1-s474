import { cons, car, cdr } from 'hexlet-pairs';

import game from '..';

import { method as random } from './even-numbers';

const gameName = 'What is the result of the expression?';

const operation = () => {
  const randomOper = random();
  if (randomOper < 33 && randomOper >= 0) {
    return '+';
  } if (randomOper < 66 && randomOper >= 33) {
    return '-';
  } return '*';
};

const makeExpress = (num1, oper, num2) => cons(num1, cons(oper, num2));

const getNum1 = express => car(express);

const getNum2 = express => cdr(cdr(express));

const getOper = express => car(cdr(express));

export const toString = express => `${getNum1(express)} ${getOper(express)} ${getNum2(express)}`;

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

const method = () => makeExpress(random(), operation(), random());

const isCorrect = (question, userAnswer) => {
  if (calculation(question) === Number(userAnswer)) {
    return true;
  }
  return false;
};

const corrAnswer = question => calculation(question);

const calc = () => game(gameName, method, isCorrect, corrAnswer);

export default calc;
