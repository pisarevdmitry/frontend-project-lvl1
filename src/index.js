import readLineSync from 'readline-sync';

const game = ({ starMsg, gameQuestion }) => {
  const userName = readLineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(starMsg);

  for (let correctAnswers = 0; correctAnswers < 3; correctAnswers += 1) {
    const { question, getAnswer: correctAnswer, check } = gameQuestion();
    console.log(`Question: ${question}`);
    const userAnswer = readLineSync.question('Your answer: ');

    if (!check(userAnswer, correctAnswer)) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${userName}!`);
};

export default game;
