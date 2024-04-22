import readlineSync from 'readline-sync';
import { isPrime, random, print } from '../utils/utils.js';
import { winGame, looseGame } from '../index.js';

export const brainPrime = (userName, gameAttempt) => {
  const isWinGame = winGame(userName, gameAttempt);
  if (isWinGame) {
    return;
  }

  if (gameAttempt === 3) {
    print('Answer "yes" if given number is prime. Otherwise answer "no".');
  }

  const randomQuesValue = random();
  print(`Question: ${randomQuesValue}`);

  const gameAnswer = isPrime(randomQuesValue);
  const userAnswer = readlineSync.question('Your answer: ').toLowerCase();
  const isLooseGame = looseGame(userName, gameAnswer, userAnswer);
  if (isLooseGame) {
    return;
  }

  print('Correct!');
  return brainPrime(userName, gameAttempt - 1);
};
