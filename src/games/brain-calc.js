import readlineSync from 'readline-sync';
import { randomExpression, isEven, print } from '../utils/utils.js';
import { winGame, looseGame } from '../index.js';

export const brainCalc = (userName, gameAttempt) => {
  const isWinGame = winGame(userName, gameAttempt);
  if (isWinGame) {
    return;
  }

  if (gameAttempt === 3) {
    print('What is the result of the expression?');
  }

  const randomExpress = randomExpression();
  print(`Question: ${randomExpress}`);

  const gameAnswer = eval(randomExpress);
  const userAnswer = readlineSync.question('Your answer: ').toLowerCase();
  const isLooseGame = looseGame(userName, gameAnswer, (+userAnswer || userAnswer));
  if (isLooseGame) {
    return;
  }

  print('Correct!');
  return brainCalc(userName, gameAttempt - 1);
};
