// StackOverflow: https://stackoverflow.com/questions/8844256/split-string-including-regular-expression-match

function map(str, regexp, matchMapper, differMapper, flag) {
	let nRegexp = new RegExp(regexp, flag || true ? 'g' : '');

	let test,
		lastIndex = 0;

	let result = [];

	while (test = nRegexp.exec(str)) {
		const start = lastIndex,
			pivot = nRegexp.lastIndex - test[0].length,
			end = nRegexp.lastIndex;

		result.push(
			differMapper(str.slice(start, pivot), start, pivot, str),
			matchMapper(test[0], pivot, end, str)
		);

		lastIndex = nRegexp.lastIndex;
	}

	const start = lastIndex,
		pivot = str.length;

	result.push(
		differMapper(str.slice(lastIndex), start, pivot, str)
	)

	return result;
}

module.exports = map;
