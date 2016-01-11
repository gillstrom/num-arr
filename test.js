'use strict';
var test = require('ava');
var m = require('./');

test(function (t) {
	t.same(m(7), [7]);
	t.same(m(52324), [5, 2, 3, 2, 4]);
});
