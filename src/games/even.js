import genRandom from '../helpers.js';

const msg = 'Answer "yes" if the number is even, otherwise answer "no".';

const brainEven = () => {
  const question = genRandom(1, 100);
  return {
    question,
    answer: question % 2 === 0 ? 'yes' : 'no',
    check: (userAnswer, correctAnswer) => userAnswer === correctAnswer,
  };
};

export default {
  starMsg: msg,
  gameQuestion: brainEven,
};
