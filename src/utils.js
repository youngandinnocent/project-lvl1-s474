import { cons, car, cdr } from 'hexlet-pairs';

export const random = () => Math.round(Math.random() * 100);

// functions for pair
export const makePair = (a, b, c) => cons(a, cons(b, c));

export const toString = pair => `${car(pair)} ${car(cdr(pair))} ${cdr(cdr(pair))}`;
//

export const firstNum = () => random();

export const secondNum = () => random();
