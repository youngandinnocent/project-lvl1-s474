import game from '..';

import { random } from '../utils';

const whatToDo = 'Answer "yes" if number even otherwise answer "no".';

const method = () => random();

const isEven = num => num % 2 === 0;

const corrAnswer = question => (isEven(question) ? 'yes' : 'no');

const even = () => game(whatToDo, method, corrAnswer);

export default even;
