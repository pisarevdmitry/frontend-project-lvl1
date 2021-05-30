import askQuestion from './console.js';

const welcome = () => {
  const userName = askQuestion('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

export default welcome;
