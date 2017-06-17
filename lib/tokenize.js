const TokenList = require('./token-list/token-list.type')
const Term = require('./term/term.type')

function tokenize(str) {
	return new TokenList({
		tokens: [
			new Term({
				text: str,
				tokenized: false
			})
		]
	})
}

module.exports = tokenize;
