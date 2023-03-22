import appendGtm from './helpers/append-gtm';
import dataLayerFn from './helpers/data-layer';
import fireEvent from './helpers/fire-event';

const GTM = {
	init: ({ id, preview, auth, events, dataLayerName, dataLayer, reactFlag, nonce='' }) => {
		if (!id) {
			console.log('[Google Tag Manager] : requires container id');
			return;
		}
		appendGtm({id, preview, auth, events, dataLayerName, reactFlag, nonce});
		dataLayerFn({id, dataLayerName, dataLayer, state: 0, reactFlag});
	},
	appendDL: ({ dataLayerName, dataLayer, state, reactFlag, event }) => {
		// pageurl: window.location.href on gtm, will create discrepency with
		// pagename: datalayer.get('pageName')
		// because href is calculated at the time and pagename is already present in datalayer
		// appending pageurl to datalayer too,
		// to sync pagename and pageurl
		if (dataLayer && dataLayer.pageName) {
			dataLayer.dlPageUrl = dataLayer.dlPageUrl || global.location.href;
		}
		dataLayerFn({dataLayerName, dataLayer, state, reactFlag, event});
	},
	fireEvent
};

export default GTM;
