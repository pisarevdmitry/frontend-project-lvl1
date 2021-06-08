import genRandom from '../helpers.js';

const msg = 'Answer "yes" if the number is even, otherwise answer "no".';

const createRound = () => {
  const question = genRandom(1, 100);
  const answer = question % 2 === 0 ? 'yes' : 'no';
  return {
    question,
    answer,
  };
};

export default {
  starMsg: msg,
  createRound,
};
