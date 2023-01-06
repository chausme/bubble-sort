import { strict as assert } from 'node:assert';
import bubbleSort from '../index.js';

assert.deepEqual(bubbleSort([10, 2, 5, 99, 7, 0]), [0, 2, 5, 7, 10, 99]);
assert.deepEqual(bubbleSort([-1, 2, -10, 0, 4, 22, -50]), [-50, -10, -1, 0, 2, 4, 22]);
