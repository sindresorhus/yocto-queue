import test from 'ava';
import Queue from '.';

test('.enqueue()', t => {
	const queue = new Queue();
	queue.enqueue('🦄');
	t.is(queue.dequeue(), '🦄');
	queue.enqueue('🌈');
	queue.enqueue('❤️');
	t.is(queue.dequeue(), '🌈');
	t.is(queue.dequeue(), '❤️');
});

test('.dequeue()', t => {
	const queue = new Queue();
	t.is(queue.dequeue(), undefined);
	t.is(queue.dequeue(), undefined);
	queue.enqueue('🦄');
	t.is(queue.dequeue(), '🦄');
	t.is(queue.dequeue(), undefined);
});

test('.clear()', t => {
	const queue = new Queue();
	queue.clear();
	queue.enqueue(1);
	queue.clear();
	t.is(queue.size, 0);
	queue.enqueue(1);
	queue.enqueue(2);
	queue.enqueue(3);
	queue.clear();
	t.is(queue.size, 0);
});

test('.size', t => {
	const queue = new Queue();
	t.is(queue.size, 0);
	queue.clear();
	t.is(queue.size, 0);
	queue.enqueue('🦄');
	t.is(queue.size, 1);
	queue.enqueue('🦄');
	t.is(queue.size, 2);
	queue.dequeue();
	t.is(queue.size, 1);
	queue.dequeue();
	t.is(queue.size, 0);
	queue.dequeue();
	t.is(queue.size, 0);
});

test('iterable', t => {
	const queue = new Queue();
	queue.enqueue('🦄');
	queue.enqueue('🌈');
	t.deepEqual([...queue], ['🦄', '🌈']);
});
