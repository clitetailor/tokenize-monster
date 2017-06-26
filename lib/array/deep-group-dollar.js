const flatten = require('./flatten')

function deepGroup$(arr, startIndexes, endIndexes, grouper, otherwise) {
	let nStartIndexes = startIndexes.slice().reverse(),
		nEndIndexes = endIndexes.slice();

	nEndIndexes.push(arr.length);
	nEndIndexes = nEndIndexes.reverse();

	let stack = [],
		accu = [],
		cur = 0,
		next, nStartIndex = nStartIndexes.pop(), nEndIndex = nEndIndexes.pop(),
		flag = false, nFlag;

	do {
		if (nStartIndex !== undefined && (nEndIndex === undefined || nStartIndex < nEndIndex)) {
			next = nStartIndex;
			nStartIndex = nStartIndexes.pop();
			nFlag = false;
		}
		else {
			next = nEndIndex;
			nEndIndex = nEndIndexes.pop();
			nFlag = true;
		}

		if (!flag) {
			stack.push(accu);
			if (nFlag) {
				accu = grouper(arr.slice(cur, next));
			}
			else {
				accu = otherwise(arr.slice(cur, next));
			}
		}
		else {
			let temp = stack.pop();
			accu = flatten([temp, accu, otherwise(arr.slice(cur, next))]);
			if (nFlag) {
				accu = grouper(accu)
			}
		}

		cur = next;
		flag = nFlag;
	} while ((nEndIndex !== undefined || nStartIndex !== undefined) && stack.length !== 0);

	if (stack.length < 1) {
		return null;
	}

	return accu[0];
}

module.exports = deepGroup$;
