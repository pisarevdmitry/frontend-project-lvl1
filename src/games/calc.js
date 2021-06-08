import genRandom from '../helpers.js';

const msg = 'What is the result of the expression?';

const operations = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
};

const createRound = () => {
  const firstNumber = genRandom(0, 50);
  const secondNumber = genRandom(0, 50);
  const operationKeys = Object.keys(operations);
  const operation = operationKeys[genRandom(0, operationKeys.length - 1)];
  const question = `${firstNumber} ${operation} ${secondNumber}`;
  const answer = operations[operation](firstNumber, secondNumber);

  return {
    question,
    answer,
  };
};

export default {
  starMsg: msg,
  createRound,
};
