function reduce(arr, reducer, initialValue) {
	let accu = initialValue,
		index = 0;

	if (initialValue === undefined) {
		accu = arr[0];
		index = 1;
	}

	for (let length = arr.length; index < length; ++index) {
		accu = reducer(accu, arr[index], index, arr);
	}

	return accu;
}

module.exports = reduce;
