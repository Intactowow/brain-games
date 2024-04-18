#!/usr/bin/env node
import { getYourName } from '../src/cli.js';
import readlineSync from 'readline-sync';
import { random, isEven } from '../src/utils/utils.js';


const userName = getYourName();
let gameAttempt = 3;

function brainEven(gameAttempt) {
  const randomQuesValue = random();

  if (gameAttempt === 3) {
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
  }
  if (gameAttempt < 1) {
    console.log(`Congratulations, ${userName}!`);
    return;
  }

  console.log(`Question: ${randomQuesValue}`);
  const userAnswer = readlineSync.question('Your answer: ').toLowerCase();
  const gameAnswer = isEven(randomQuesValue);

  if (gameAnswer !== userAnswer) {
    console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${gameAnswer}.`)
    console.log(`Let's try again, ${userName}!`);

    return;
  }

  console.log('Correct!');
  return brainEven(gameAttempt - 1);
};

brainEven(gameAttempt);
