Tokenize Monster
================

> Yet another powerful tokenizer in **JS**.

Installation
------------

```bash
npm install --save tokenize-monster
```

Getting Started
---------------

```javascript
const tokenizer = require('tokenize-monster');

const tokens = tokenizer.matchAndMap(
	'i\'d like to <drink> some <milk>',
	/<[^><]+>/,
	text => [[text]],
	text => [text]
);

console.log(tokens);
// => [ 'i\'d like to ', [ '<drink>' ], ' some ', [ '<milk>' ], '' ]

const nTokens = tokenizer.matchAndMap(
	'i\'d like to <drink> some <milk>',
	/<[^><]+>/,
	text => [text],
	text => []
);

console.log(nTokens);
// => [ '<drink>', '<milk>' ]
```

Example
-------

- [Simple XML Parser](https://github.com/clitetailor/simple-xml-parser)

Documentation
-------------

Our docs are available at [Tokenize Monster Wiki](https://github.com/clitetailor/tokenize-monster/wiki).

Changelog
---------

Visit [Github Releases](https://github.com/clitetailor/tokenize-monster/releases) page for more information.

