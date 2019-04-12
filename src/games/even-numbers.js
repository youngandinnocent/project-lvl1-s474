import game from '..';

const gameName = 'Answer "yes" if number even otherwise answer "no".';

export const method = () => Math.round(Math.random() * 100);

const isEven = num => num % 2 === 0;

const isCorrect = (question, userAnswer) => {
  if ((isEven(question) && userAnswer === 'yes') || (!isEven(question) && userAnswer === 'no')) {
    return true;
  }
  return false;
};

const corrAnswer = question => (isEven(question) ? 'yes' : 'no');

const even = () => game(gameName, method, isCorrect, corrAnswer);

export default even;
