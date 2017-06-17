const TokenList = require('./token-list/token-list.type')

function toTokenList(arr) {
	return new TokenList({
		tokens: arr
	});
}

module.exports = toTokenList;
