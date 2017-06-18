const replace = require('../core/array/replace')
const map = require('../core/text/map')
const assign = require('../fn/assign')
const match = require('../term/match')

function tag(tokenList, regexp, tagName, mapper = text => text) {
	const matcher = term =>
		match(term, regexp) && !term.tokenized;

	const nReplacer = term => map(
		term.text,
		regexp,
		_text => {
			return {
				tag: tagName,
				text: _text,
				data: mapper(_text),
				tokenized: true
			}
		},
		_text => {
			return {
				text: _text,
				tokenized: false
			}
		}
	)

	const nTokens = replace(
		tokenList.tokens,
		matcher,
		nReplacer
	);

	return assign(
		tokenList,
		{
			tokens: nTokens
		}
	)
}

module.exports = tag;
