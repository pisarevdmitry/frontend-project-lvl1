import genRandom from '../helpers.js';

const msg = 'Find the greatest common divisor of given numbers.?';

const generateProgression = (start, size, step) => {
  const result = [];
  for (let i = 0, current = start; i < size; i += 1, current += step) {
    result.push(current);
  }
  return result;
};

const createRound = () => {
  const startNumber = genRandom(2, 15);
  const size = 10;
  const step = genRandom(2, 10);
  const progression = generateProgression(startNumber, size, step);
  const hiddenIndex = genRandom(0, progression.length - 1);
  const answer = progression[hiddenIndex];
  const question = progression.map((elem, index) => (index === hiddenIndex ? '..' : elem)).join(' ');
  return {
    question,
    answer: String(answer),
  };
};

export default {
  starMsg: msg,
  createRound,
};
