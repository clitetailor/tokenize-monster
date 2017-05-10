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

**text.md**

```markdown
- I would like to drink some <some kind of drink>.
- I love <pet>.

- I'd like to go to play with someone.
```

**index.js**

```javascript
let fs = require('fs');
let tm = require('tokenize-monster');

let data = fs.readFileSync('./text.md', 'utf-8');

let result = data.split(/\r?\n/)
	.filter(line =>
		line !== /\s*/)
	.map(line => {
		return tm.tokenize(line)
			.tag(/(<[^>]*>)/, "tag", text =>
				/<([^>]*)>/.exec(text)[1])
			.split(/\s+/, "word")
			.getTokens();
	})

console.log(result);

/* =>
[ [ { tag: 'word', data: '-' },
    { tag: 'word', data: 'I' },
    { tag: 'word', data: 'would' },
    { tag: 'word', data: 'like' },
    { tag: 'word', data: 'to' },
    { tag: 'word', data: 'drink' },
    { tag: 'word', data: 'some' },
    { tag: 'word', data: '' },
    { tag: 'tag', data: 'some kind of drink' },
    { tag: 'word', data: '.' } ],
  [ { tag: 'word', data: '-' },
    { tag: 'word', data: 'I' },
    { tag: 'word', data: 'love' },
    { tag: 'word', data: '' },
    { tag: 'tag', data: 'pet' },
    { tag: 'word', data: '.' } ],
  [ { tag: 'word', data: '' } ],
  [ { tag: 'word', data: '-' },
    { tag: 'word', data: 'I\'d' },
    { tag: 'word', data: 'like' },
    { tag: 'word', data: 'to' },
    { tag: 'word', data: 'go' },
    { tag: 'word', data: 'to' },
    { tag: 'word', data: 'play' },
    { tag: 'word', data: 'with' },
    { tag: 'word', data: 'someone.' } ] ]
*/
```