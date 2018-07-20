'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var appendToHTML = function appendToHTML(_ref) {
	var _ref$data = _ref.data,
	    data = _ref$data === undefined ? '' : _ref$data,
	    _ref$noscript = _ref.noscript,
	    noscript = _ref$noscript === undefined ? false : _ref$noscript,
	    _ref$head = _ref.head,
	    head = _ref$head === undefined ? false : _ref$head,
	    _ref$reactFlag = _ref.reactFlag,
	    reactFlag = _ref$reactFlag === undefined ? false : _ref$reactFlag;

	try {
		if (reactFlag) {
			if (noscript) {
				return _react2.default.createElement('noscript', { dangerouslySetInnerHTML: { __html: data } });
			}
			return _react2.default.createElement('script', { dangerouslySetInnerHTML: { __html: data } });
		}
		if (document) {
			var elem = void 0;
			if (noscript) {
				elem = document.createElement('noscript');
			} else {
				elem = document.createElement('script');
			}
			elem.innerHTML = data;
			if (head && document) {
				document.head.appendChild(elem);
			} else if (document) {
				document.body.appendChild(elem);
			}
		}
	} catch (e) {
		console.log(e);
	}
};

exports.default = appendToHTML;