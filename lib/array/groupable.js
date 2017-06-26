function groupable(arr, startMatcher, endMatcher) {
	if (arr.length < 2) {
		return false;
	}

	let startIndex = arr.length,
		endIndex = 0;

	for (let i = 0; i < arr.length; ++i) {
		if (startMatcher(arr[i - 1], arr[i], i, arr)) {
			startIndex = i;
			break;
		}
	}

	for (let i = arr.length; i > 0; --i) {
		if (endMatcher(arr[i - 1], arr[i], i, arr)) {
			endIndex = i;
			break;
		}
	}

	if (startIndex < endIndex) {
		return true;
	}
	return false;
}

module.exports = groupable;
