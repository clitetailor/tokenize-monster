const matchAndMap = require('../string/match-and-map')

function createMatcher(regexp, mapper) {
	return otherwise => text => matchAndMap(
		text,
		regexp,
		mapper,
		otherwise
	)
}

module.exports = createMatcher;
