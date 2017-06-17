const TokenList = require('./token-list.type')
const Term = require('../term/term.type')
const replace = require('../core/replace')
const assign = require('../fn/assign')
const match = require('../term/match')

function tag(tokenList, regexp, tagName, mapper) {
	const matcher = term => match(term, regexp);
	const nReplacer = term => term.text.split(
		regexp
	)
		.map(term => new Term(mapper(term)))

	const nTokens = replace(
		tokenList.tokens,
		matcher,
		nReplacer
	);

	return new TokenList(
		assign(
			tokenList,
			{
				tokens: nTokens
			}
		)
	)
}

module.exports = tag;
