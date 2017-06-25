function _pushApply(arr, args) {
	return Array.prototype.push.apply(arr, args);
}

module.exports = _pushApply;
