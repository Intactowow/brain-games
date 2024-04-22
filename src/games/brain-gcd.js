import readlineSync from 'readline-sync';
import { randomGcd, print, gcd } from '../utils/utils.js';
import { winGame, looseGame } from '../index.js';

const brainGcd = (userName, gameAttempt) => {
  const isWinGame = winGame(userName, gameAttempt);
  if (isWinGame) {
    return;
  }

  if (gameAttempt === 3) {
    print('Find the greatest common divisor of given numbers.');
  }

  const randomGcdQues = randomGcd();
  print(`Question: ${randomGcdQues}`);

  const numbersArray = randomGcdQues.split(" ").map(Number);
  const gameAnswer = gcd(numbersArray[0], numbersArray[1]);
  const userAnswer = readlineSync.question('Your answer: ').toLowerCase();
  const isLooseGame = looseGame(userName, gameAnswer, (+userAnswer || userAnswer));
  if (isLooseGame) {
    return;
  }

  print('Correct!');
  return brainGcd(userName, gameAttempt - 1);
};

export default brainGcd;
