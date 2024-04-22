import getYourName from './cli.js';
import { print } from './utils/utils.js';

const gameAttempt = 3;
const userName = getYourName();

const winGame = (nameUser, attemptGame) => {
  if (attemptGame < 1) {
    print(`Congratulations, ${nameUser}!`);
    return true;
  }
};

const looseGame = (nameUser, gameAnswer, userAnswer) => {
  if (gameAnswer !== userAnswer) {
    print(`${userAnswer} is wrong answer ;(. Correct answer was ${gameAnswer}.`);
    print(`Let's try again, ${nameUser}!`);

    return true;
  }
};

export {
  gameAttempt,
  userName,
  winGame,
  looseGame,
};
