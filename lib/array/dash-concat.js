function _concat(arr1, arr2) {
	/**
	 * https://jsperf.com/array-prototype-push-apply-vs-concat/20
	 */
	const len = arr2.length;

	for (let i = 0; i < len; ++i) {
		arr1.push(arr2[i]);
	}
}

module.exports = _concat;
