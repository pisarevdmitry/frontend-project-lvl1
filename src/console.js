import readLineSync from 'readline-sync';

const askQuestion = (question) => readLineSync.question(question);

export const write = (msg) => console.log(msg);

export default askQuestion;
