import { cons, car, cdr } from 'hexlet-pairs';

import game from '..';

import { firstNum, secondNum } from '../utils';

const whatToDo = 'What is the result of the expression?';

const collection = ['+', '-', '*'];

// "У вас есть массив. Вы можете вычислить его длину." - для чего это нужно?
const firstIndex = collection.length / 3 - 1;

const lastIndex = collection.length - 1;

// если я импортирую сюда главную функцию-генератор, то в данном случае будет менее рамдомный
// т.к. в том применено округление
const operation = () => {
  const rand = Math.floor(firstIndex - 0.5 + Math.random() * (lastIndex - firstIndex + 1));
  return String(collection[Math.abs(rand)]);
};

const method = () => cons(firstNum(), cons(operation(), secondNum()));

// "В эту функцию нужно передавать 3 параметра (2 числа и оператор).
//  Старайтесь упростить." - не понимаю, как упрощать. Я не могу просто взять операцию из массива,
// т.к. это строчный элемент
// const calculation = () => {
//   if (operation === '+') {
//     return firstNum + secondNum;
//   } if (operation === '-') {
//     return firstNum - secondNum;
//   } if (operation === '*') {
//     return firstNum * secondNum;
//   } return NaN;
// };

const calculation = (express) => {
  switch (car(cdr(express))) {
    case '+':
      return car(express) + cdr(cdr(express));
    case '-':
      return car(express) - cdr(cdr(express));
    case '*':
      return car(express) * cdr(cdr(express));
    default:
      return NaN;
  }
};

const corrAnswer = question => String(calculation(question));

const calc = () => game(whatToDo, method, corrAnswer);

export default calc;
