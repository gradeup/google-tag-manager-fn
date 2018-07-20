'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function stringify(object) {
	var stringified = '';
	if (object && (typeof object === 'string' || typeof object === 'number')) {
		return String(object);
	}

	if (object && (typeof object === 'undefined' ? 'undefined' : _typeof(object)) === 'object') {
		try {
			stringified = JSON.stringify(object);
		} catch (err) {
			console.error('stringify', err);
		}
	}

	return stringified;
}

exports.stringify = stringify;