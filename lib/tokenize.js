const TokenList = require('./token-list.type')
const Term = require('./term.type')

function tokenize(str) {
	if (Array.isArray(str)) {
		const arr = str;

		return new TokenList({
			tokens: arr.map(text =>
				new Term({
					text,
					tokenized: false
				})
			)
		})
	}

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
