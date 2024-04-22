#!/usr/bin/env node
import brainProgression from '../src/games/brain-progression.js';
import { userName, gameAttempt } from '../src/index.js';

brainProgression(userName, gameAttempt);
