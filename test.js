'use strict';
var assert = require('assert');
var numArr = require('./');

it('should just work', function () {
	assert.deepEqual(numArr(7), [7]);
	assert.deepEqual(numArr(52324), [5, 2, 3, 2, 4]);
	assert.notDeepEqual(numArr(123), [5, 2, 3, 2, 4]);
});
