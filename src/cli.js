import readLineSync from 'readline-sync';

export default () => {
  const userName = readLineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
};
