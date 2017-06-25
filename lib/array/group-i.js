// const debug = require('../debug')

function groupI(arr, startIndexes, endIndexes, grouper, otherwise = () => []) {
	let result = otherwise(endIndexes[0], startIndexes[0], arr);

	for (let i = 1; i < startIndexes.length; ++i) {
		for (let item of grouper(startIndexes[i - 1], endIndexes[i], arr)) {
			result.push(item)
		}

		for (let item of otherwise(endIndexes[i], startIndexes[i], arr)) {
			result.push(item)
		}
	}

	return result;
}

module.exports = groupI;
