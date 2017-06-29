const _concat = require('./dash-concat')

function flatten(arrays) {
	let sum = [];
	for (let arr of arrays) {
		_concat(sum, arr)
	}
	return sum;
}

module.exports = flatten;
