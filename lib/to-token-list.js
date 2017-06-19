const TokenList = require('./token-list.type')
const Term = require('./term.type')

function toTokenList(terms) {
	return new TokenList({
		terms: terms.map(term => new Term(term))
	});
}

module.exports = toTokenList;
