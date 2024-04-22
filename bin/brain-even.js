#!/usr/bin/env node
import brainEven from '../src/games/brain-even.js';
import { userName } from '../src/index.js';
import { gameAttempt } from '../src/index.js';

brainEven(userName, gameAttempt);
