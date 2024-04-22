import readlineSync from 'readline-sync';
import { random, isEven, print } from '../utils/utils.js';
import { winGame, looseGame } from '../index.js';

const brainEven = (userName, gameAttempt) => {
  const isWinGame = winGame(userName, gameAttempt);
  if (isWinGame) {
    return;
  }

  if (gameAttempt === 3) {
    print('Answer "yes" if the number is even, otherwise answer "no".');
  }

  const randomQuesValue = random();
  print(`Question: ${randomQuesValue}`);

  const gameAnswer = isEven(randomQuesValue);
  const userAnswer = readlineSync.question('Your answer: ').toLowerCase();
  const isLooseGame = looseGame(userName, gameAnswer, userAnswer);
  if (isLooseGame) {
    return;
  }

  print('Correct!');
  brainEven(userName, gameAttempt - 1);
};

export default brainEven;
