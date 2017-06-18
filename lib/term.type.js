const assign = require('./fn/assign')

class Term {
	constructor({
		tag,
		text,
		tokenized,
		data
	}) {
		this.tag = tag;
		this.text = text;
		this.tokenized = tokenized;
		this.data = data;
	}

	match(regexp) {
		return this.text.match(regexp);
	}

	replace(regexp, ...rest) {
		return new Term(
			assign(
				this,
				{
					text: this.text.replace(regexp, ...rest)
				}
			)
		);
	}
}

module.exports = Term;
