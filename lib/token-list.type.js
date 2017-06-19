const Term = require('./term.type')
const assign = require('./fn/assign')
const map = require('./core/text/map')
const replace = require('./core/array/replace')
const group = require('./core/array/group')
// const debug = require('./fn/debug')

class TokenList {
	constructor({
		terms
	}) {
		this.terms = terms || [];
	}

	tag(
		tagName,
		regexp,
		mapper = (text) => text,
		otherwise = () => undefined
	) {
		const matcher = term =>
			!term.tokenized && term.text.match(regexp)

		const nReplacer = term => map(
			term.text,
			regexp,
			(_text, start, end, str) => new Term({
				tag: tagName,
				text: _text,
				data: mapper(_text, start, end, str),
				tokenized: true
			}),
			(_text, start, end, str) => new Term({
				text: _text,
				tokenized: false,
				data: otherwise(_text, start, end, str)
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

	split(
		tagName,
		regexp,
		mapper = text => text,
		otherwise = () => undefined
	) {
		const matcher = term =>
			!term.tokenized && term.text.match(regexp)

		const nReplacer = term => map(
			term.text,
			regexp,
			(_text, start, end, str) => new Term({
				text: _text,
				data: otherwise(_text, start, end, str),
				tokenized: false
			}),
			(_text, start, end, str) => new Term({
				tag: tagName,
				text: _text,
				tokenized: true,
				data: mapper(_text, start, end, str)
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

	group(tagName, filter, grouper) {
		return new TokenList({
			terms: group(
				this.terms,
				(term, index, terms) => filter(term, index, terms),
				(prevId, curId, terms) => grouper(prevId, curId, terms)
					.map(data => new Term({
						tag: tagName,
						data,
						tokenized: true
					}))
			)
		})
	}

	filter(callback) {
		return new TokenList({
			terms: this.terms.filter((term, index, terms) =>
				callback(term, index, terms))
		})
	}

	get tokens() {
		return this.terms.filter(term => term.tokenized)
	}
}

module.exports = TokenList;
