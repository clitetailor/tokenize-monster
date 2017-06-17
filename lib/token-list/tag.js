const TokenList = require('./token-list.type')
const Term = require('../term/term.type')
const replace = require('../core/array/replace')
const map = require('../core/text/map')
const assign = require('../fn/assign')
const match = require('../term/match')

function tag(tokenList, regexp, tagName, mapper) {
	const matcher = term =>
		match(term, regexp) && !term.tokenized;

	const nReplacer = term => map(
		term.text,
		regexp,
		_text => new Term({
			tag: tagName,
			text: _text,
			data: mapper(_text),
			tokenized: true
		}),
		_text => new Term({
			text: _text,
			tokenized: false
		})
	)

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
