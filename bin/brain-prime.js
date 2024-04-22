#!/usr/bin/env node
import brainPrime from '../src/games/brain-prime.js';
import { userName, gameAttempt } from '../src/index.js';

brainPrime(userName, gameAttempt);
