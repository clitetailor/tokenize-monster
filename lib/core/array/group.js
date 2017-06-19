const flatten = require('../../fn/array/flatten')
const range = require('../../fn/array/range')

function group(arr, startFilter, endFilter, grouper, otherwise) {
	const filtered = range(arr.length)
		.filter(i => startFilter(arr[i], i, arr) || endFilter(arr[i], i, arr))

	const lastId = filtered.length - 1;

	return range(lastId, (v, k) => {
		const prevId = filtered[k],
			curId = filtered[k + 1];

		if (startFilter(arr[prevId]) && endFilter(arr[curId])) {
			return grouper(prevId + 1, curId, arr);
		}
		return otherwise(prevId + 1, curId, arr);
	}).concat([otherwise(filtered[lastId] + 1, arr.length, arr)])
		.reduce(flatten, otherwise(0, filtered[0], arr));
}

module.exports = group;
