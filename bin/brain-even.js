#!/usr/bin/env node

import game from '../src/index.js';
import genQuestion, { msg } from '../src/games/even.js';

game(msg, genQuestion);
