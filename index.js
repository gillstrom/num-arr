'use strict';
var numberIsInteger = require('number-is-integer');

module.exports = function (val) {
	if (!numberIsInteger(val)) {
		throw new TypeError('Expected an integer');
	}

	return (val).toString().split('').map(Number);
};
