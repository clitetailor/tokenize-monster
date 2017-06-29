// const debug = require('../debug')
const _concat = require('../array/dash-concat')

function matchAndMap(str, regexp, mapper, otherwise = () => [], flag) {
	let nRegexp = new RegExp(regexp, flag || true ? 'g' : '');

	let test,
		lastIndex = 0;

	let result = [];

	while (test = nRegexp.exec(str)) {
		const start = lastIndex,
			pivot = nRegexp.lastIndex - test[0].length,
			end = nRegexp.lastIndex;

		_concat(result, otherwise(str.slice(start, pivot), start, pivot, str));
		_concat(result, mapper(test[0], pivot, end, str));

		lastIndex = nRegexp.lastIndex;
	}

	const start = lastIndex,
		pivot = str.length;

	_concat(result, otherwise(str.slice(lastIndex), start, pivot, str));

	return result;
}

module.exports = matchAndMap;
