const tokenize = require('./lib/tokenize')
const debug = require('./lib/fn/debug')

console.log(
	tokenize("what the hell is this <thing> bla, bla <yeap> love love")
		.tag(
			"tag",
			/<[^><]+>/,
			(text, start, end) => debug(text, start, end),
			(text, start, end) => debug(text, start, end)
		)
		.tokens
)
