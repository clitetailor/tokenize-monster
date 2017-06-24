const reduce = require('../../fn/array/reduce')

function compose(funcs) {
	return reduce(funcs.reverse(), (prev, cur) => cur(prev));
}

module.exports = compose;
