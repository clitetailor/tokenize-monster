// const debug = require('../debug')

function mapAndFlatten(arr, mapper) {
	let result = [];

	for (let i = 0, length = arr.length; i < length; ++i) {
			Array.prototype.push.apply(result, mapper(arr[i], i, arr))
	}

	return result;
}

module.exports = mapAndFlatten;
