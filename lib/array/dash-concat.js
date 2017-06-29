function _concat(arr1, arr2) {
	/**
	 * https://jsperf.com/array-prototype-push-apply-vs-concat/20
	 */
	let i = arr2.length;
	if (i <= 0) {
		return;
	}

	while (--i) {
		arr1.push(arr2[i]);
	}

	arr1.push(arr2[i]);
}

module.exports = _concat;
