import game from '..';

const whatToDo = 'What number is missing in the progression?';

const firstNum = Math.floor(Math.random() * 10);
const step = Math.floor(1 + Math.random() * 11);
const hidNum = Math.floor(Math.random() * 10);

const lastIndex = 9;

const method = () => {
  let result = '';
  let currentNum = 0;
  let i = 0;
  const space = (i !== lastIndex) ? ' ' : '';
  while (i <= lastIndex) {
    result += (i === hidNum) ? `..${space}` : String(firstNum + currentNum) + space;
    i += 1;
    currentNum += step;
  }
  return result;
};

const corrAnswer = () => String(firstNum + hidNum * step);

const progression = () => game(whatToDo, method, corrAnswer);

export default progression;
