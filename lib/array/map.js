function map(arr, mapper) {
	let result = [];

	for (let i = 0; i < arr.length; ++i) {
		result.push(mapper(arr[i], i, arr));
	}

	return result;
}

module.exports = map;
