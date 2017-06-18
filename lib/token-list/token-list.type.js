const tag = require('./tag')

class TokenList {
	constructor({
		tokens
	}) {
		this.tokens = tokens || [];
	}

	tag(regexp, tagName, mapper) {
		return new TokenList(tag(this, regexp, tagName, mapper))
	}
}

module.exports = TokenList;
