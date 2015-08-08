'use strict';
var assert = require('assert');
var mocha = require('mocha');
var numArr = require('./');

mocha.it('should just work', function () {
	assert.deepEqual(numArr(7), [7]);
	assert.deepEqual(numArr(52324), [5, 2, 3, 2, 4]);
});
