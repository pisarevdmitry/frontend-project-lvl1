import genRandom from './helpers.js';

export const msg = 'Answer "yes" if the number is even, otherwise answer "no".';

const brainEven = () => {
  const question = genRandom(1, 100);
  return {
    question,
    getAnswer: () => (question % 2 === 0 ? 'yes' : 'no'),
    check: (userAnswer, correctAnswer) => userAnswer === correctAnswer,
  };
};

export default brainEven;
