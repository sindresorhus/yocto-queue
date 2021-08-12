import {expectType} from 'tsd';
import Queue from './index.js';

const queue = new Queue<string>();
queue.enqueue('🦄');

expectType<string | undefined>(queue.dequeue());
