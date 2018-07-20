'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _appendToHtml = require('./append-to-html');

var _appendToHtml2 = _interopRequireDefault(_appendToHtml);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var dataLayerFn = function dataLayerFn(_ref) {
	var id = _ref.id,
	    _ref$dataLayerName = _ref.dataLayerName,
	    dataLayerName = _ref$dataLayerName === undefined ? 'dataLayer' : _ref$dataLayerName,
	    _ref$event = _ref.event,
	    event = _ref$event === undefined ? 'DLChanged' : _ref$event,
	    _ref$dataLayer = _ref.dataLayer,
	    dataLayer = _ref$dataLayer === undefined ? {} : _ref$dataLayer,
	    _ref$state = _ref.state,
	    state = _ref$state === undefined ? 0 : _ref$state;

	switch (state) {
		/* Initializing the dataLayer Variable */
		case 0:
			if (process && process.browser && window) {
				window[dataLayerName] = window[dataLayerName] || [];
				window[dataLayerName].push(dataLayer);
				if (id) {
					window.gtmId = id;
				}
			} else {
				var dataLayerVar = '\n\t\t\t\t\twindow[' + dataLayerName + '] = window[' + dataLayerName + '] || [];\n\t\t\t\t\twindow[' + dataLayerName + '].push(' + dataLayer + ');\n\t\t\t\t\tif (' + id + ') {\n\t\t\t\t\t\twindow.gtmId = ' + id + ';\n\t\t\t\t\t}\n\t\t\t\t\t';
				(0, _appendToHtml2.default)({ data: dataLayerVar, head: true });
			}
			break;
		/* Adding dataLayer variable with event to fire tag */
		case 1:
			if (process && process.browser && window) {
				window[dataLayerName] = window[dataLayerName] || [];
				window[dataLayerName].push(dataLayer);
				window[dataLayerName].push({ event: event });
			} else {
				var _dataLayerVar = '\n\t\t\t\t\twindow[' + dataLayerName + '] = window[' + dataLayerName + '] || [];\n\t\t\t\t\twindow[' + dataLayerName + '].push(' + dataLayer + ');\n\t\t\t\t\twindow[' + dataLayerName + '].push(' + event + ');\n\t\t\t\t\t';
				(0, _appendToHtml2.default)({ data: _dataLayerVar, head: true });
			}
			break;
	}
};

exports.default = dataLayerFn;