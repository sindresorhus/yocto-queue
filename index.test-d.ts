import {expectType} from 'tsd';
import Queue = require('.');

const queue = new Queue<string>();
queue.enqueue('🦄');

expectType<string | undefined>(queue.dequeue());
