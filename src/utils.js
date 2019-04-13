import { cons, car, cdr } from 'hexlet-pairs';

export const random = () => Math.round(Math.random() * 100);

// functions for pair
export const makePair = (a, b, c) => cons(a, cons(b, c));

export const getA = pair => car(pair);

export const getB = pair => car(cdr(pair));

export const getC = pair => cdr(cdr(pair));

export const toString = pair => `${getA(pair)} ${getB(pair)} ${getC(pair)}`;
//

export const firstNum = () => random();

export const secondNum = () => random();
