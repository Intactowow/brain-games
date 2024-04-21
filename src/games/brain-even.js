import { random, isEven } from '../utils/utils.js';
import { winGame, looseGame, print } from '../index.js';

export const brainEven = (userName, gameAttempt) => {
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
  const isLooseGame = looseGame(userName, gameAnswer);
  if (isLooseGame) {
    return;
  }

  print('Correct!');
  return brainEven(userName, gameAttempt - 1);
};
