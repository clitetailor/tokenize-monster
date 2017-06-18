const TokenList = require('./token-list/token-list.type')
const Term = require('./term/term.type')

function toTokenList(arr) {
	return new TokenList({
		tokens: arr.map(term => new Term(term))
	});
}

module.exports = toTokenList;
