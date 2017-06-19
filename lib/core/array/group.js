// const debug = require('../../fn/debug')

function group(arr, startMatcher, endMatcher, grouper, otherwise) {
	let startIndexes = [],
		endIndexes = [];

	let flag = false,
		lastIndex = -1;

	for (let i = 0; i < arr.length + 1; ++i) {
		if (endMatcher(arr[i - 1], arr[i], i, arr)) {
			if (flag === true) {
				startIndexes.push(lastIndex);
				endIndexes.push(i);
				flag = false;
			}
		}

		if (startMatcher(arr[i - 1], arr[i], i, arr)) {
			lastIndex = i;
			flag = true;
		}
	}

	startIndexes.push(arr.length);
	endIndexes.unshift(0);

	let results = otherwise(endIndexes[0], startIndexes[0], arr);

	for (let i = 1; i < startIndexes.length; ++i) {
		for (let item of grouper(startIndexes[i - 1], endIndexes[i], arr)) {
			results.push(item)
		}

		for (let item of otherwise(endIndexes[i], startIndexes[i], arr)) {
			results.push(item)
		}
	}

	return results;
}

module.exports = group;
