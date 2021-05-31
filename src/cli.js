import askQuestion from './console.js';

const welcome = () => {
  let userName;
  while (!userName) {
    userName = askQuestion('May I have your name? ');
  }
  console.log(`Hello, ${userName}!`);
  return userName;
};

export default welcome;
