const TokenList = require('./token-list.type')
const Term = require('./term.type')
const toTokenList = require('./to-token-list')
const tokenize = require('./tokenize')

const {
	group,
	replace,
	map,
	mapAndFlatten
} = require('./core')

module.exports = {
	TokenList,
	Term,
	toTokenList,
	tokenize,
	group,
	replace,
	map,
	mapAndFlatten
}
