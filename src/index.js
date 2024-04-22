import { getYourName } from './cli.js';

const gameAttempt = 3;
const userName = getYourName();
const winGame = (userName, gameAttempt) => {
  if (gameAttempt < 1) {
    console.log(`Congratulations, ${userName}!`);
    return true;
  }
}
const looseGame = (userName, gameAnswer, userAnswer) => {
  if (gameAnswer !== userAnswer) {
    console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${gameAnswer}.`)
    console.log(`Let's try again, ${userName}!`);

    return true;
  }
}

export {
  gameAttempt,
  userName,
  winGame,
  looseGame
}
