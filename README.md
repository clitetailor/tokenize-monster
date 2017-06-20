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

let tokens = tokenize("i'd <like> to drink some <milk>")
	.tag("tag", /<[^><]+>/, firstGroup(/<([^><]+)>/))
	.tokens;

console.log(tokens.map(token => token.data))
// => [ 'like', 'milk' ]

console.log(tokens.map(token => token.tag))
// => ['tag', 'tag']
```

Documentation
-------------

Our docs are available at [Tokenize Monster Wiki](https://github.com/clitetailor/tokenize-monster/wiki).

Changelog
---------

Visit [Github Releases](https://github.com/clitetailor/tokenize-monster/releases) page for more information.

