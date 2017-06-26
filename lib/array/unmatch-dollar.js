function unmatch$(startIndexes, endIndexes) {
	let threshold = 0;

	for (let i = 0, j = 0; i < startIndexes.length || j < endIndexes.length;) {
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

module.exports = unmatch$;
