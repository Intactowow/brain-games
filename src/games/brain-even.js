import { getYourName } from '../cli.js';
import readlineSync from 'readline-sync';
import { random, isEven } from '../utils/utils.js';


const userName = getYourName();

export const brainEven = (gameAttempt = 3) => {
  if (gameAttempt < 1) {
    console.log(`Congratulations, ${userName}!`);
    return;
  }

  if (gameAttempt === 3) {
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
  }

  const randomQuesValue = random();
  console.log(`Question: ${randomQuesValue}`);

  const userAnswer = readlineSync.question('Your answer: ').toLowerCase();
  const gameAnswer = isEven(randomQuesValue);

  if (gameAnswer !== userAnswer) {
    console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${gameAnswer}.`)
    console.log(`Let's try again, ${userName}!`);

    return;
  }

  console.log('Correct!');
  return brainEven(gameAttempt - 1);
};
