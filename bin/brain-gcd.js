#!/usr/bin/env node
import game from '../src/index.js';
import genQuestion, { msg } from '../src/games/gcd.js';

game(msg, genQuestion);
