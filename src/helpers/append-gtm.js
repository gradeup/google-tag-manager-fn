import {stringify} from './utils';
import appendToHTML from './append-to-html';

const appendGtm = ({id, preview = '', auth = '', events = {}, dataLayerName = 'dataLayer', reactFlag, nonce = ''}) => {
	const eventsVar = stringify(events).slice(1, -1);
	let previewVar = '';
	let authVar = '';
	if (preview) {
		previewVar = `&gtm_preview=${preview}`;
	}
	if (auth) {
		authVar = `&gtm_auth=${auth}`;
	}

	/* Google Tag Manager (script) : Goes in the head tag */
	let noscript;
	if(nonce === '') {
		noscript = `
		(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js', ${eventsVar} });var f=d.getElementsByTagName(s)[0], j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src= 'https://www.googletagmanager.com/gtm.js?id='+i+dl+'${authVar}${previewVar}';f.parentNode.insertBefore(j,f); })(window,document, 'script', '${dataLayerName}', '${id}');
		`;
	} else {
		noscript = `
		(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js', ${eventsVar} });var f=d.getElementsByTagName(s)[0], j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.nonce=${nonce};j.src= 'https://www.googletagmanager.com/gtm.js?id='+i+dl+'${authVar}${previewVar}';f.parentNode.insertBefore(j,f); })(window,document, 'script', '${dataLayerName}', '${id}');
		`;
	}
	appendToHTML({data: noscript, head: true, reactFlag, nonce});
	/* Google Tag Manager (script) : Goes in the head tag */

	/* Google Tag Manager (noscript) : Goes in the body tag */
	const iframe = `
		<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-W8KR6SS${previewVar}${authVar}" height="0" width="0" style="display:none;visibility:hidden"></iframe>
		`;
	appendToHTML({data: iframe, noscript: true, reactFlag});
	/* Google Tag Manager (noscript) : Goes in the body tag */
};

export default appendGtm;
