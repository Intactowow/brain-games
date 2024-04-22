import getYourName from './cli.js';
import { print } from './utils/utils.js';

const gameAttempt = 3;
const userName = getYourName();

const winGame = (userName, gameAttempt) => {
  if (gameAttempt < 1) {
    print(`Congratulations, ${userName}!`);
    return true;
  }
};

const looseGame = (userName, gameAnswer, userAnswer) => {
  if (gameAnswer !== userAnswer) {
    print(`${userAnswer} is wrong answer ;(. Correct answer was ${gameAnswer}.`)
    print(`Let's try again, ${userName}!`);

    return true;
  }
};

export {
  gameAttempt,
  userName,
  winGame,
  looseGame
}
