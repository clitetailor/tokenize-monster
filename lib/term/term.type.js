const match = require('./match')
const replace = require('./replace')

class Term {
	constructor({
		text,
		tokenized,
		data
	}) {
		this.text = text;
		this.tokenized = tokenized;
		this.data = data;
	}

	match(regexp) {
		match(this, regexp);
	}

	replace(regexp, ...rest) {
		replace(this, regexp, ...rest)
	}
}

module.exports = Term;
