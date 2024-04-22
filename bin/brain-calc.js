#!/usr/bin/env node
import { brainCalc } from '../src/games/brain-calc.js';
import { userName } from '../src/index.js';
import { gameAttempt } from '../src/index.js';

brainCalc(userName, gameAttempt);
