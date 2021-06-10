import readLineSync from 'readline-sync';

const play = (currentGame) => {
  console.log('Welcome to the Brain Games!');
  const userName = readLineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  const { starMsg, createRound } = currentGame;
  console.log(starMsg);
  const rounds = 3;

  for (let correctAnswers = 0; correctAnswers < rounds; correctAnswers += 1) {
    const { question, answer: correctAnswer } = createRound();
    console.log(`Question: ${question}`);
    const userAnswer = readLineSync.question('Your answer: ');
    const normalizedAnswer = userAnswer.toLowerCase();

    if (normalizedAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${userName}!`);
};

export default play;
