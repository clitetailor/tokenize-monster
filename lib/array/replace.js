// const debug = require('../debug')
const _concat = require('./dash-concat')

function replace(arr, matcher, replacer) {
	let result = [];

	for (let i = 0, length = arr.length; i < length; ++i) {
		if (matcher(arr[i], i, arr)) {
			_concat(result, replacer(arr[i], i, arr))
		}
		else {
			result.push(arr[i]);
		}
	}

	return result;
}

module.exports = replace;
