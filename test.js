import test from 'ava';
import m from './';

test(t => {
	t.same(m(7), [7]);
	t.same(m(52324), [5, 2, 3, 2, 4]);
});
