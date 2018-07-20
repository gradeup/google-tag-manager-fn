import appendToHTML from './append-to-html';

const dataLayerFn = ({id, dataLayerName = 'dataLayer', event = 'DLChanged', dataLayer = {}, state = 0}) => {
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
				const dataLayerVar = `
					window[${dataLayerName}] = window[${dataLayerName}] || [];
					window[${dataLayerName}].push(${dataLayer});
					if (${id}) {
						window.gtmId = ${id};
					}
					`;
				appendToHTML({data: dataLayerVar, head: true});
			}
			break;
		/* Adding dataLayer variable with event to fire tag */
		case 1:
			if (process && process.browser && window) {
				window[dataLayerName] = window[dataLayerName] || [];
				window[dataLayerName].push(dataLayer);
				window[dataLayerName].push({event});
			} else {
				const dataLayerVar = `
					window[${dataLayerName}] = window[${dataLayerName}] || [];
					window[${dataLayerName}].push(${dataLayer});
					window[${dataLayerName}].push(${event});
					`;
				appendToHTML({data: dataLayerVar, head: true});
			}
			break;
	}
};

export default dataLayerFn;
