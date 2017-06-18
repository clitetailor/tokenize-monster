const tokenize = require('./lib/tokenize')
// const debug = require('./lib/fn/debug')

console.log(
	tokenize("what the hell is this <thing> bla, bla <yeap>")
		.tag("tag", /<[^><]+>/)
		.split("word", /\s+/)
		.filter(text => text !== "")
		.tokens
)
