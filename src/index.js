import readlineSync from 'readline-sync';
import { getYourName } from './cli.js';

export const gameAttempt = 3;
export const userName = getYourName();
export const winGame = (userName, gameAttempt) => {
  if (gameAttempt < 1) {
    console.log(`Congratulations, ${userName}!`);
    return true;
  }
}
export const looseGame = (userName, gameAnswer) => {
  const userAnswer = readlineSync.question('Your answer: ').toLowerCase();

  if (gameAnswer !== userAnswer) {
    console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${gameAnswer}.`)
    console.log(`Let's try again, ${userName}!`);

    return true;
  }
}
export const print = (text) => {
  console.log(text);
}
