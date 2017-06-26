const reduce = require('../array/reduce')

function compose(funcs) {
	return value => reduce(funcs.reverse(), (prev, cur) => cur(prev), value);
}

module.exports = compose;
