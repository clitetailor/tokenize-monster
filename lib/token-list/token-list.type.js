const tag = require('./tag')

class TokenList {
	constructor({
		tokens
	}) {
		this.tokens = tokens || [];
	}

	tag(regexp, tagName, mapper) {
		tag(this, regexp, tagName, mapper)
	}
}

module.exports = TokenList;
