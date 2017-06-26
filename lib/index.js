const matchAndMap = require('./string/match-and-map')
const createMatcher = require('./regexp/create-matcher')
const compose = require('./function/compose')
const map = require('./array/map')
const reduce = require('./array/reduce')
const replace = require('./array/replace')
const mapAndFlatten = require('./array/map-and-flatten')
const unmatch = require('./array/unmatch')
const unmatch$ = require('./array/unmatch-dollar')
const groupable = require('./array/groupable')
const groupable$ = require('./array/groupable-dollar')
const group = require('./array/group')
const group$ = require('./array/group-dollar')
const deepGroup = require('./array/deep-group')
const deepGroup$ = require('./array/deep-group-dollar')
const loopUntil = require('./control/loop-until')
const debug = require('./debug')

module.exports = {
	matchAndMap,
	createMatcher,
	compose,
	map,
	reduce,
	replace,
	mapAndFlatten,
	unmatch,
	unmatch$,
	groupable,
	groupable$,
	group,
	group$,
	deepGroup,
	deepGroup$,
	loopUntil,
	debug
}
