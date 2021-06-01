import genRandom from '../helpers.js';

const msg = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const numbers = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31,
  37, 41, 43, 47, 53, 4, 25, 30, 27, 8, 40, 52, 33, 15, 36, 10, 22];

const isPrime = (number) => {
  const iter = (divisor) => {
    if (divisor > number / 2) return true;
    if (number % divisor === 0) return false;
    return iter(divisor + 1);
  };
  return iter(2);
};

const prime = () => {
  const number = numbers[genRandom(0, numbers.length - 1)];
  const question = `${number}`;
  return {
    question,
    getAnswer: isPrime(number) ? 'yes' : 'no',
    check: (userAnswer, correctAnswer) => userAnswer === correctAnswer,
  };
};

export default {
  starMsg: msg,
  gameQuestion: prime,
};
