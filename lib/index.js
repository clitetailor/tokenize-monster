function replace(arr, matcher, replacer) {
	return arr.reduce((_arr, item) => {
		if (matcher(item)) {
			return _arr.concat(replacer(item));
		}
		else {
			return _arr.concat([item])
		}
	}, []);
}

function flatten(arr, next) {
	return arr.concat([next]);
}

class Tokenizer {
	constructor(str) {
		if (str === undefined) {
			return;
		}

		this._tokens = [{
			tokenized: false,
			text: str
		}]
	}

	tag(reg, tagName, replacer) {
		let newTokenizer = new Tokenizer();

		newTokenizer._tokens = replace(this._tokens,
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
			})

		return newTokenizer;
	}

	split(reg, tagName, replacer) {
		let newTokenizer = new Tokenizer();

		newTokenizer._tokens = replace(this._tokens,
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
			})

		return newTokenizer;
	}

	getAll() {
		return this._tokens;
	}

	getTokens() {
		return this._tokens
			.filter(token =>
				token.tokenized === true)
			.map(token => {
				return {
					tag: token.tag,
					data: token.data
				}
			});
	}
}

function tokenize(str) {
	return new Tokenizer(str);
}

module.exports = {
	replace,
	Tokenizer,
	tokenize,
	flatten
}
