const map = require('./text/map')
const matchAndMap = require('./text/match-and-map')
const compose = require('./array/compose')
const replace = require('./array/replace')
const mapAndFlatten = require('./array/map-and-flatten')
const unmatch = require('./array/unmatch')
const groupable = require('./array/groupable')
const group = require('./array/group')
const deepGroup = require('./array/deep-group')
const loopUntil = require('./array/loop-until')

module.exports = {
	map,
	matchAndMap,
	compose,
	replace,
	mapAndFlatten,
	unmatch,
	groupable,
	group,
	deepGroup,
	loopUntil
}
