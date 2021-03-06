'use strict';
const path = require('path');
const opentype = require('opentype.js');
const charPreset = require('./char-preset');

const fontPath = path.join(__dirname, '../fonts/Comismsh.ttf');
const font = opentype.loadSync(fontPath);
const ascender = font.ascender;
const descender = font.descender;

const options = {
	width: 150,
	height: 50,
	stroke: 'black',
	fill: 'none',
	background: '',
	size: 4,
	ignoreChars: '',
	fontSize: 56,
	charPreset, font, ascender, descender,
	truncateLineProbability: 0.5,
	truncateCurveProbability: 0.5,
	truncateCurvePositionMin: 0.4,
	truncateCurvePositionMax: 0.6,
  connectionPathDeviation: 10.0,
  nodeDeviation: 0.2,
};

const loadFont = filepath => {
	const font = opentype.loadSync(filepath);
	options.font = font;
	options.ascender = font.ascender;
	options.descender = font.descender;
};

module.exports = {
	options, loadFont
};
