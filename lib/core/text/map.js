// StackOverflow: https://stackoverflow.com/questions/8844256/split-string-including-regular-expression-match
const debug = require('../../fn/debug')

function map(str, regexp, matchMapper, differMapper, flag) {
	let nRegexp = new RegExp(
		regexp,
		flag || true ? 'g' : ''
	);

	let test,
		lastIndex = 0;

	let result = [];

	while (
		test = nRegexp.exec(str)
	) {
		result.push(
			differMapper(
				str.slice(lastIndex, nRegexp.lastIndex - test[0].length)
			),
			matchMapper(
				test[0]
			)
		);

		lastIndex = nRegexp.lastIndex;
	}

	return debug(result);
}

module.exports = map;
