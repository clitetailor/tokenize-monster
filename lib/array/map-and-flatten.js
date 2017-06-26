// const debug = require('../debug')
const _pushApply = require('./dash-push-apply')

function mapAndFlatten(arr, mapper) {
	let result = [];

	for (let i = 0, length = arr.length; i < length; ++i) {
			_pushApply(result, mapper(arr[i], i, arr))
	}

	return result;
}

module.exports = mapAndFlatten;
