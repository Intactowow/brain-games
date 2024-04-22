#!/usr/bin/env node
import brainGcd from '../src/games/brain-gcd.js';
import { userName, gameAttempt } from '../src/index.js';

brainGcd(userName, gameAttempt);
