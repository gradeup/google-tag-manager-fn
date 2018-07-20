'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
var fireEvent = function fireEvent(_ref) {
	var _ref$event = _ref.event,
	    event = _ref$event === undefined ? 'custom-event' : _ref$event,
	    _ref$data = _ref.data,
	    data = _ref$data === undefined ? {} : _ref$data,
	    _ref$elementId = _ref.elementId,
	    elementId = _ref$elementId === undefined ? '' : _ref$elementId;

	if (document && window && window.CustomEvent) {
		var customEv = new CustomEvent(event, { detail: data });
		if (elementId) {
			document.getElementById(elementId).dispatchEvent(customEv);
		} else {
			document.dispatchEvent(customEv);
		}
		return true;
	}
};

exports.default = fireEvent;