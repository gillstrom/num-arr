'use strict';
module.exports = function (val) {
	if (!Number.isInteger(val)) {
		throw new TypeError('Expected an integer');
	}

	return val.toString().split('').map(Number);
};
