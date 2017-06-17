function range(length, mapfn = (v, k) => k) {
	return Array.from({ length }, mapfn);
}

module.exports = range;
