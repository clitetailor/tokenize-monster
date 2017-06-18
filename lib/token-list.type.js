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
		const texts = this.terms.map(term => term.text);

		return new TokenList({
			terms: group(
				this.terms,
				(term, i) => filter(term.text, i, texts),
				(prevId, curId) => new Term({
					tag: tagName,
					data: grouper(prevId, curId, texts),
					tokenized: true
				})
			)
		})
	}

	filter(callback) {
		const texts = this.terms.map(term => term.text)

		return new TokenList({
			terms: this.terms.filter((term, index) =>
				callback(term.text, index, texts))
		})
	}

	get tokens() {
		return this.terms.filter(term => term.tokenized)
	}
}

module.exports = TokenList;
