const readline = require('readline-sync');

const hello = () => {
  console.log('Welcome to the Brain Games!');
  console.log('');
  const userName = readline.question('May I have your name? ');
  return console.log(`Hello, ${userName}!`);
};

export default hello;
