function debug(...args) {
	console.log(...args);

	return args[0];
}

module.exports = debug;
