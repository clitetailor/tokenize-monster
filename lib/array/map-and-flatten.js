// const debug = require('../debug')
const _concat = require('./dash-concat')

function mapAndFlatten(arr, mapper) {
	let result = [];

	for (let i = 0, length = arr.length; i < length; ++i) {
			_concat(result, mapper(arr[i], i, arr))
	}

	return result;
}

module.exports = mapAndFlatten;
