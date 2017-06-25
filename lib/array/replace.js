// const debug = require('../debug')
const _pushApply = require('./dash-push-apply')

function replace(arr, matcher, replacer) {
	let result = [];

	for (let i = 0, length = arr.length; i < length; ++i) {
		if (matcher(arr[i], i, arr)) {
			_pushApply(result, replacer(arr[i], i, arr))
		}
		else {
			result.push(arr[i]);
		}
	}

	return result;
}

module.exports = replace;
