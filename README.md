Tokenize Monster
================

> Yet another powerful tokenizer in **JS**.

Install
-------

```bash
npm install --save tokenize-monster
```

Getting Started
---------------

**index.js**

```javascript
const tokenize = require('./tokenize-monster').tokenize

function firstGroup(regexp) {
  return text => text.match(regexp)[1]
}

console.log(
	tokenize("i'd <like> to drink some <milk>")
		.tag("tag", /<[^><]+>/, firstGroup(/<([^><]+)>/))
		.tokens
    .map(token => token.data)
)

// => [ 'like', 'milk' ]
```