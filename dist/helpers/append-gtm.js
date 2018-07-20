'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _utils = require('./utils');

var _appendToHtml = require('./append-to-html');

var _appendToHtml2 = _interopRequireDefault(_appendToHtml);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var appendGtm = function appendGtm(_ref) {
	var id = _ref.id,
	    _ref$preview = _ref.preview,
	    preview = _ref$preview === undefined ? '' : _ref$preview,
	    _ref$auth = _ref.auth,
	    auth = _ref$auth === undefined ? '' : _ref$auth,
	    _ref$events = _ref.events,
	    events = _ref$events === undefined ? {} : _ref$events,
	    _ref$dataLayerName = _ref.dataLayerName,
	    dataLayerName = _ref$dataLayerName === undefined ? 'dataLayer' : _ref$dataLayerName,
	    reactFlag = _ref.reactFlag;

	var eventsVar = (0, _utils.stringify)(events).slice(1, -1);
	var previewVar = '';
	var authVar = '';
	if (preview) {
		previewVar = '&gtm_preview=' + preview;
	}
	if (auth) {
		authVar = '&gtm_auth=' + auth;
	}

	/* Google Tag Manager (script) : Goes in the head tag */
	var noscript = '\n\t\t(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({\'gtm.start\': new Date().getTime(),event:\'gtm.js\', ' + eventsVar + ' });var f=d.getElementsByTagName(s)[0], j=d.createElement(s),dl=l!=\'dataLayer\'?\'&l=\'+l:\'\';j.async=true;j.src= \'https://www.googletagmanager.com/gtm.js?id=\'+i+dl+\'' + authVar + previewVar + '\';f.parentNode.insertBefore(j,f); })(window,document, \'script\', \'' + dataLayerName + '\', \'' + id + '\');\n\t\t';
	(0, _appendToHtml2.default)({ data: noscript, head: true, reactFlag: reactFlag });
	/* Google Tag Manager (script) : Goes in the head tag */

	/* Google Tag Manager (noscript) : Goes in the body tag */
	var iframe = '\n\t\t<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-W8KR6SS' + previewVar + authVar + '" height="0" width="0" style="display:none;visibility:hidden"></iframe>\n\t\t';
	(0, _appendToHtml2.default)({ data: iframe, noscript: true, reactFlag: reactFlag });
	/* Google Tag Manager (noscript) : Goes in the body tag */
};

exports.default = appendGtm;