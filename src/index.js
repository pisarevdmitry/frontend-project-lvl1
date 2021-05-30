import welcome from './cli.js';
import ask, { write } from './console.js';

const game = (starMsg, gameQuestion) => {
  const user = welcome();
  let correctAnswers = 0;
  let question;
  let userAnswer;
  let correctAnswer;
  let getAnswer;
  let check;

  write(starMsg);
  while (correctAnswers < 3) {
    ({ question, getAnswer, check } = gameQuestion());
    write(`Question: ${question}`);
    userAnswer = ask('Your answer: ');
    correctAnswer = getAnswer(userAnswer);
    if (!check(userAnswer, correctAnswer)) {
      write(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      write(`Let's try again, ${user}!`);
      return;
    }

    write('Correct!');
    correctAnswers += 1;
  }
  write(`Congratulations, ${user}!`);
};

export default game;
