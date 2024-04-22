import readlineSync from 'readline-sync';
import { randomExpression, print, isNumber, calculateExpression } from '../utils/utils.js';
import { winGame, looseGame } from '../index.js';

const brainCalc = (userName, gameAttempt) => {
  const isWinGame = winGame(userName, gameAttempt);
  if (isWinGame) {
    return;
  }

  if (gameAttempt === 3) {
    print('What is the result of the expression?');
  }

  const randomExpress = randomExpression();
  print(`Question: ${randomExpress}`);

  const gameAnswer = calculateExpression(randomExpress);
  const userAnswer = isNumber(+readlineSync.question('Your answer: ').toLowerCase());
  const isLooseGame = looseGame(userName, gameAnswer, (+userAnswer || userAnswer));
  if (isLooseGame) {
    return;
  }

  print('Correct!');
  return brainCalc(userName, gameAttempt - 1);
};

export default brainCalc;
