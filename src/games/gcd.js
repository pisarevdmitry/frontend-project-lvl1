import genRandom from '../helpers.js';

const msg = 'Find the greatest common divisor of given numbers.?';

const findGcd = (num1, num2) => {
  const iter = (number1, number2) => {
    const max = number1 > number2 ? number1 : number2;
    const min = number1 > number2 ? number2 : number1;
    const remainder = max % min;

    if (remainder === 0) return min;
    return iter(min, remainder);
  };
  return iter(num1, num2);
};

const gcd = () => {
  const firstNumber = genRandom(1, 100);
  const secondNumber = genRandom(1, 100);
  const question = `${firstNumber} ${secondNumber}`;
  const answer = findGcd(firstNumber, secondNumber);

  return {
    question,
    getAnswer: answer,
    check: (userAnswer, correctAnswer) => Number(userAnswer) === correctAnswer,
  };
};

export default {
  starMsg: msg,
  gameQuestion: gcd,
};
