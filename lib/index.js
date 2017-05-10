let immu = require('immu-func')

class MArray extends Array {
	replace(matcher, replacer) {
		return immu.setType(this.reduce((_arr, item) => {
			if (matcher(item)) {
				return _arr.concat(replacer(item));
			}
			else {
				return _arr.concat([item])
			}
		}, []), MArray);
	}
}

class TokenList extends MArray {
	constructor(str) {
		super();

		this.push({
			tokenized: false,
			text: str
		})
	}

	tag(reg, tagName, replacer) {
		return immu.setType(this.replace(
			token =>
				!token.tokenized,
			token => {
				return token.text.split(reg)
					.map(text => {
						if (text.match(reg)) {
							if (replacer) {
								return {
									tag: tagName,
									text: text,
									data: replacer(text),
									tokenized: true
								}
							}

							return {
								tag: tagName,
								text: text,
								data: text,
								tokenized: true
							}
						}

						return {
							text: text,
							tokenized: false
						}
					})
			}), TokenList);
	}

	split(reg, tagName, replacer) {
		return immu.setType(this.replace(
			token =>
				!token.tokenized,
			token => {
				return token.text.split(reg)
					.map(text => {
						if (replacer) {
							return {
								tag: tagName,
								text: text,
								data: replacer(text),
								tokenized: true
							}
						}

						return {
							tag: tagName,
							text: text,
							data: text,
							tokenized: true
						}
					})
			}), TokenList);
	}

	getTokens() {
		return this
			.filter(token =>
				token.tokenized === true)
			.map(token => {
				return {
					tag: token.tag,
					data: token.data
				}
			})
	}
}

function tokenize(str) {
	return new TokenList(str);
}

module.exports = {
	tokenize,
	TokenList,
	MArray
}
