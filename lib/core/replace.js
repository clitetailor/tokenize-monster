function replace(arr, matcher, replacer) {
	return arr.reduce((acc, item) => {
		if (matcher(item)) {
			return acc.concat(replacer(item));
		}
		else {
			return arr.concat([item]);
		}
	})
}

module.export = replace;
