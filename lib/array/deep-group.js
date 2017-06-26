const group = require('./group')
const groupable = require('./groupable')

function deepGroup(arr, startMatcher, endMatcher, grouper, otherwise) {
	let result = arr;

	do {
		result = group(
			result,
			startMatcher,
			endMatcher,
			grouper,
			otherwise
		)
	} while (groupable(
		result,
		startMatcher,
		endMatcher
	))

	return result;
}

module.exports = deepGroup;
