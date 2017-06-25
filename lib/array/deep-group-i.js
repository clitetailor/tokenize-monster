const _pushApply = require('../array/dash-push-apply')

function deepGroupI(arr, startIndexes, endIndexes) {
	let nStartIndexes = startIndexes.slice().reverse(),
		nEndIndexes = endIndexes.slice();

	nEndIndexes.push(arr.length);
	nEndIndexes = nEndIndexes.reverse();

	let stack = [],
		cur = 0,
		next,
		nStartIndex,
		nEndIndex,
		temp = [],
		flag = false,
		nFlag;

	if (nStartIndexes.length > 0) {
		nStartIndex = nStartIndexes.pop();
	}

	if (nEndIndexes.length > 0) {
		nEndIndex = nEndIndexes.pop();
	}

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
			stack.push(temp);
			temp = arr.slice(cur, next);
		}
		else {
			let accu = stack.pop();
			accu.push(temp);
			temp = accu;
			_pushApply(temp, arr.slice(cur, next));
		}

		cur = next;
		flag = nFlag;
	} while ((nEndIndex !== undefined || nStartIndex !== undefined) && stack.length !== 0);

	if (stack.length < 1) {
		return null;
	}

	return temp;
}

module.exports = deepGroupI;
