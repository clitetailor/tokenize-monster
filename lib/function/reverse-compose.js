const reduce = require('../array/reduce')

function reverseCompose(funcs) {
	return value => reduce(funcs, (prev, cur) => cur(prev), value);
}

module.exports = reverseCompose;
