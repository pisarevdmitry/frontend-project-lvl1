import genRandom from '../helpers.js';

const msg = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number < 2) return false;

  const iter = (divisor) => {
    if (divisor > number / 2) return true;
    if (number % divisor === 0) return false;
    return iter(divisor + 1);
  };
  return iter(2);
};

const prime = () => {
  const number = genRandom(1, 100);
  const question = `${number}`;
  return {
    question,
    answer: isPrime(number) ? 'yes' : 'no',
    check: (userAnswer, correctAnswer) => userAnswer === correctAnswer,
  };
};

export default {
  starMsg: msg,
  gameQuestion: prime,
};
