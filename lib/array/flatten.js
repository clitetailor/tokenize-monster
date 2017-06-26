const _pushApply = require('./dash-push-apply')

function flatten(arrays) {
	let sum = [];
	for (let arr of arrays) {
		_pushApply(sum, arr)
	}
	return sum;
}

module.exports = flatten;
