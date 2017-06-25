function loopUntil(initialValue, callback, stopCondition) {
	let accu = initialValue;

	do {
		accu = callback(accu);
	} while (!stopCondition(accu));

	return accu;
}

module.exports = loopUntil;
