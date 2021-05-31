import genRandom from '../helpers.js';

const msg = 'What is the result of the expression?';

const operations = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
};

const calc = () => {
  const firstNumber = genRandom(0, 50);
  const secondNumber = genRandom(0, 50);
  const operationKeys = Object.keys(operations);
  const operation = operationKeys[genRandom(0, operationKeys.length - 1)];
  const question = `${firstNumber} ${operation} ${secondNumber}`;

  return {
    question,
    getAnswer: () => operations[operation](firstNumber, secondNumber),
    check: (userAnswer, correctAnswer) => Number(userAnswer) === correctAnswer,
  };
};

export default {
  starMsg: msg,
  gameQuestion: calc,
};
