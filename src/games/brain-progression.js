import readlineSync from 'readline-sync';
import { randomProgression, print, gcd } from '../utils/utils.js';
import { winGame, looseGame } from '../index.js';

export const brainProgression = (userName, gameAttempt) => {
  const isWinGame = winGame(userName, gameAttempt);
  if (isWinGame) {
    return;
  }

  if (gameAttempt === 3) {
    print('Find the greatest common divisor of given numbers.');
  }

  const randomProgressionQues = randomProgression();
  print(`Question: ${randomProgressionQues.progression}`);

  const gameAnswer = randomProgressionQues.answer;
  const userAnswer = readlineSync.question('Your answer: ').toLowerCase();
  const isLooseGame = looseGame(userName, gameAnswer, (+userAnswer || userAnswer));
  if (isLooseGame) {
    return;
  }

  print('Correct!');
  return brainProgression(userName, gameAttempt - 1);
};
