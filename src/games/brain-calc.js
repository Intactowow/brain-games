import readlineSync from 'readline-sync';
import * as utils from '../utils/utils.js';
import {
  winGame,
  looseGame,
} from '../index.js';

const brainCalc = (userName, gameAttempt) => {
  const isWinGame = winGame(userName, gameAttempt);
  if (isWinGame) {
    return;
  }

  if (gameAttempt === 3) {
    utils.print('What is the result of the expression?');
  }

  const randomExpress = utils.randomExpression();
  utils.print(`Question: ${randomExpress}`);

  const gameAnswer = utils.calculateExpression(randomExpress);
  const userAnswer = utils.isNumber(+readlineSync.question('Your answer: ').toLowerCase());
  const isLooseGame = looseGame(userName, gameAnswer, (+userAnswer || userAnswer));
  if (isLooseGame) {
    return;
  }

  utils.print('Correct!');
  brainCalc(userName, gameAttempt - 1);
};

export default brainCalc;
