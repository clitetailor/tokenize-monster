function replace(arr, matcher, replacer) {
	return arr.reduce((acc, item, index) => {
		if (matcher(item, index, arr)) {
			return acc.concat(replacer(item, index, arr));
		}
		else {
			return acc.concat([item]);
		}
	}, [])
}

module.exports = replace;
