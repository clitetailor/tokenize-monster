const Term = require('./term.type')
const assign = require('./fn/assign')
const map = require('./core/text/map')
const replace = require('./core/array/replace')

class TokenList {
	constructor({
		terms
	}) {
		this.terms = terms || [];
	}

	tag(tagName, regexp, mapper = text => text) {
		const matcher = term =>
			!term.tokenized && term.text.match(regexp)

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
			this.terms,
			matcher,
			nReplacer
		);

		return new TokenList(
			assign(
				this,
				{
					terms: nTokens
				}
			)
		)
	}

	replace(tagName, matcher, replacer) {
		const nMatcher = term =>
			!term.tokenized && matcher(term.text);

		const nReplacer = term => replacer(term.text)
			.map(data => new Term({
				tag: tagName,
				tokenized: true,
				text: term.text,
				data,
			}))

		return replace(
			this.terms,
			nMatcher,
			nReplacer
		)
	}
}

module.exports = TokenList;
