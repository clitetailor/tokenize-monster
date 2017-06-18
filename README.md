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

console.log(
	tokenize("i'd like to drink some <milk>")
		.tag("tag", /<[^><]+>/, text =>
			text.match(/<([^><]+)>/)[1])
		.split("word", /\s+/)
		.filter(term => term.text !== '')
		.tokens
)


console.log(result);

/* =>
[ Term { tag: 'word', text: 'i\'d', tokenized: true, data: 'i\'d' },
  Term { tag: 'word', text: 'like', tokenized: true, data: 'like' },
  Term { tag: 'word', text: 'to', tokenized: true, data: 'to' },
  Term { tag: 'word', text: 'drink', tokenized: true, data: 'drink' },
  Term { tag: 'word', text: 'some', tokenized: true, data: 'some' },
  Term { tag: 'tag', text: '<milk>', tokenized: true, data: 'milk' } ]
*/
```