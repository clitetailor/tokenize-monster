const tokenize = require('./lib/tokenize')
// const debug = require('./lib/fn/debug')

console.log(
	tokenize(
		`<question>are you thinking?</question>
		<answer>not thing!</answer>`
	).tag('tag', /<[^<>]+>/, text => text.match(/<([^<>]+)>/)[1])
)
