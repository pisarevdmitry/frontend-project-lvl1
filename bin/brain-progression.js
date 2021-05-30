#!/usr/bin/env node
import game from '../src/index.js';
import genQuestion, { msg } from '../src/games/progressions.js';

game(msg, genQuestion);
