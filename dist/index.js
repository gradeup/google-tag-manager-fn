'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _appendGtm = require('./helpers/append-gtm');

var _appendGtm2 = _interopRequireDefault(_appendGtm);

var _dataLayer = require('./helpers/data-layer');

var _dataLayer2 = _interopRequireDefault(_dataLayer);

var _fireEvent = require('./helpers/fire-event');

var _fireEvent2 = _interopRequireDefault(_fireEvent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GTM = {
	init: function init(_ref) {
		var id = _ref.id,
		    preview = _ref.preview,
		    auth = _ref.auth,
		    events = _ref.events,
		    dataLayerName = _ref.dataLayerName,
		    dataLayer = _ref.dataLayer,
		    reactFlag = _ref.reactFlag,
		    _ref$nonce = _ref.nonce,
		    nonce = _ref$nonce === undefined ? '' : _ref$nonce;

		if (!id) {
			console.log('[Google Tag Manager] : requires container id');
			return;
		}
		(0, _appendGtm2.default)({ id: id, preview: preview, auth: auth, events: events, dataLayerName: dataLayerName, reactFlag: reactFlag, nonce: nonce });
		(0, _dataLayer2.default)({ id: id, dataLayerName: dataLayerName, dataLayer: dataLayer, state: 0, reactFlag: reactFlag });
	},
	appendDL: function appendDL(_ref2) {
		var dataLayerName = _ref2.dataLayerName,
		    dataLayer = _ref2.dataLayer,
		    state = _ref2.state,
		    reactFlag = _ref2.reactFlag,
		    event = _ref2.event;

		// pageurl: window.location.href on gtm, will create discrepency with
		// pagename: datalayer.get('pageName')
		// because href is calculated at the time and pagename is already present in datalayer
		// appending pageurl to datalayer too,
		// to sync pagename and pageurl
		if (dataLayer && dataLayer.pageName) {
			dataLayer.dlPageUrl = dataLayer.dlPageUrl || global.location.href;
		}
		(0, _dataLayer2.default)({ dataLayerName: dataLayerName, dataLayer: dataLayer, state: state, reactFlag: reactFlag, event: event });
	},
	fireEvent: _fireEvent2.default
};

exports.default = GTM;