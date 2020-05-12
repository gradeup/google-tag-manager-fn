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
		dataLayerFn({dataLayerName, dataLayer, state, reactFlag, event});
	},
	fireEvent
};

export default GTM;
