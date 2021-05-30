import welcome from '../cli.js';
import ask, { write } from '../console.js';

const brainEven = () => {
  const user = welcome();
  write('Answer "yes" if the number is even, otherwise answer "no".');
  let correctAnswers = 0;
  let question;
  let userAnswer;
  let correctAnswer;
  while (correctAnswers < 3) {
    question = 1 + Math.round(Math.random() * (100 - 1));
    write(`Question: ${question}`);
    userAnswer = ask('Your answer: ');
    correctAnswer = question % 2 === 0 ? 'yes' : 'no';
    if (userAnswer !== correctAnswer) {
      write(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      write(`Let's try again, ${user}!`);
      return;
    }
    write('Correct!');
    correctAnswers += 1;
  }
  write(`Congratulations, ${user}!`);
};

export default brainEven;
