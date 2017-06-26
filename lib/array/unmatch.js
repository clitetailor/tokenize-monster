function unmatch(arr, startMatcher, endMatcher) {
	let startIndexes = [],
		endIndexes = [];

	if (startMatcher(arr[-1], arr[0], 0, arr)) {
		startIndexes.push(0)
	}

	for (let i = 1; i < arr.length; ++i) {
		if (endMatcher(arr[i - 1], arr[i], i, arr)) {
			endIndexes.push(i);
		}

		if (startMatcher(arr[i - 1], arr[i], i, arr)) {
			startIndexes.push(i);
		}
	}

	if (endMatcher(arr[arr.length - 1], arr[arr.length], arr.length, arr)) {
		endIndexes.push(arr.length);
	}

	let threshold = 0;

	for (let i = 0, j = 0; i < startIndexes.length || j < endIndexes.length; ) {
		if (startIndexes[i] < endIndexes[j]) {
			++i;
			++threshold;
		}
		else {
			++j;
			--threshold;
		}

		if (threshold < 0) {
			return endIndexes[j];
		}
	}

	return null;
}

module.exports = unmatch;
