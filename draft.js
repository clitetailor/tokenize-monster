const tokenize = require('./lib/tokenize')

console.log(
	tokenize("what the hell is this <thing> bla, bla <yeap> love love")
		.tag(
			/<[^><]+>/,
			"tag"
		)
)
