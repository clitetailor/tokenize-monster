const Term = require('./term.type')
const assign = require('../fn/assign')

function replace(term, regexp, ...rest) {
	const nTerm = new Term(
		assign(
			nTerm,
			{
				text: nTerm.text.replace(regexp, ...rest)
			}
		)
	);
}

module.exports = replace;
