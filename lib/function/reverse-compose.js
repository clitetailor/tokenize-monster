const reduce = require('../array/reduce')

function reverseCompose(funcs) {
	return reduce(funcs, (prev, cur) => cur(prev));
}

module.exports = reverseCompose;
