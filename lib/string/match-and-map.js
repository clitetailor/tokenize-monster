// const debug = require('../debug')
const _pushApply = require('../array/dash-push-apply')

function matchAndMap(str, regexp, mapper, otherwise = () => [], flag) {
	let nRegexp = new RegExp(regexp, flag || true ? 'g' : '');

	let test,
		lastIndex = 0;

	let result = [];

	while (test = nRegexp.exec(str)) {
		const start = lastIndex,
			pivot = nRegexp.lastIndex - test[0].length,
			end = nRegexp.lastIndex;

		_pushApply(result, otherwise(str.slice(start, pivot), start, pivot, str));
		_pushApply(result, mapper(test[0], pivot, end, str));

		lastIndex = nRegexp.lastIndex;
	}

	const start = lastIndex,
		pivot = str.length;

	_pushApply(result, otherwise(str.slice(lastIndex), start, pivot, str));

	return result;
}

module.exports = matchAndMap;