const matchAndMap = require('./string/match-and-map')
const compose = require('./function/compose')
const map = require('./array/map')
const reduce = require('./array/reduce')
const replace = require('./array/replace')
const mapAndFlatten = require('./array/map-and-flatten')
const unmatch = require('./array/unmatch')
const groupable = require('./array/groupable')
const group = require('./array/group')
const deepGroup = require('./array/deep-group')
const loopUntil = require('./control/loop-until')
const debug = require('./debug')

module.exports = {
	matchAndMap,
	compose,
	map,
	reduce,
	replace,
	mapAndFlatten,
	unmatch,
	groupable,
	group,
	deepGroup,
	loopUntil,
	debug
}
