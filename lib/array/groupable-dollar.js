function groupable$(arr, startIndexes, endIndexes) {
	if (arr.length < 2) {
		return false;
	}

	const firstStartIndex = startIndex[0],
		lastEndIndex = endIndexes[endIndexes.length - 1]

	const startIndex = firstStartIndex ? firstStartIndex : arr.length,
		endIndex = lastEndIndex ? lastEndIndex : 0;

	if (startIndex < endIndex) {
		return true;
	}
	return false;
}

module.exports = groupable$;
