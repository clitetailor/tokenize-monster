function flatten(prev, cur) {
	return Array.prototype.push(prev, [cur])
}

module.exports = flatten;
