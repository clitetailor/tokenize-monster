// const debug = require('../../fn/debug')

function group(arr, startMatcher, endMatcher, grouper, otherwise) {
	let startIndexes = [],
		endIndexes = [];

	let flag = false,
		lastIndex = -1;

	if (startMatcher(arr[-1], arr[0], 0, arr)) {
		lastIndex = 0;
		flag = true;
	}

	for (let i = 1; i < arr.length; ++i) {
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

	if (endMatcher(arr[arr.length - 1], arr[arr.length], arr.length, arr)) {
		if (flag === true) {
			startIndexes.push(lastIndex);
			endIndexes.push(arr.length);
			flag = false;
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
