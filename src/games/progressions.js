import genRandom from '../helpers.js';

const msg = 'Find the greatest common divisor of given numbers.?';

const generateProgression = (start, step) => {
  const result = [start];
  for (let i = 1, current = start; i < 10; i += 1) {
    current += step;
    result.push(current);
  }
  return result;
};

const progressions = () => {
  const startNumber = genRandom(2, 15);
  const step = genRandom(2, 10);
  const progression = generateProgression(startNumber, step);
  const hideIndex = genRandom(0, progression.length - 1);
  const answer = progression[hideIndex];
  const question = progression.map((elem, index) => (index === hideIndex ? '..' : elem)).join(' ');
  return {
    question,
    getAnswer: () => answer,
    check: (userAnswer, correctAnswer) => Number(userAnswer) === correctAnswer,
  };
};

export default {
  starMsg: msg,
  gameQuestion: progressions,
};
