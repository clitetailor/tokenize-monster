const groupI = require('./group-i')
const groupableI = require('./groupable-i')

function deepGroupI(arr, startIndexes, endIndexes, grouper, otherwise) {
	let result = arr;

	do {
		result = groupI(
			result,
			startIndexes,
			endIndexes,
			grouper,
			otherwise
		)
	} while (groupableI(
		result,
		startIndexes,
		endIndexes
	))

	return result;
}

module.exports = deepGroupI;
