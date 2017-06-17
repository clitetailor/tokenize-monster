const flatten = require('./flatten')
const range = require('./range')

function group(arr, filter, grouper) {
	const filtered = range(arr.length)
		.filter(i => filter(arr[i]))
		.concat(arr.length)

	return range(filtered.length - 1, (v, k) => {
		const prevId = filtered[k],
			  curId  = filtered[k + 1];

		return grouper(prevId, curId, arr);
	})
		.concat(flatten, []);
}

module.exports = group;
