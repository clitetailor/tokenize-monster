const flatten = require('../../fn/array/flatten')
const range = require('../../fn/array/range')

function group(arr, startFilter, endFilter, grouper, otherwise) {
	const filtered = range(arr.length)
			.filter(i => startFilter(arr[i], i, arr) || endFilter(arr[i], i, arr))

	return [].concat(
		otherwise(0, filtered[0], arr),
		range(filtered.length - 1, (v, k) => {
			const prevId = filtered[k],
				curId = filtered[k + 1];

			if (startFilter(arr[prevId]) && endFilter(arr[curId])) {
				return grouper(prevId, curId + 1, arr);
			}
			return otherwise(prevId + 1, curId, arr);
		}),
		otherwise(filtered[filtered.length - 1] + 1, arr.length, arr)
	)
		.reduce(flatten, []);
}

module.exports = group;
