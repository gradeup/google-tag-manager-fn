import React from 'react';

const appendToHTML = ({data = '', noscript = false, head = false, reactFlag = false, nonce = ''}) => {
	try {
		if (reactFlag) {
			if (noscript) {
				return <noscript dangerouslySetInnerHTML={{__html: data}}/>;
			}
			return <script dangerouslySetInnerHTML={{__html: data}}/>;
		}
		if (document) {
			let elem;
			if (noscript) {
				elem = document.createElement('noscript');
			} else {
				elem = document.createElement('script');
			}
			if(nonce) {
				elem.setAttribute("nonce", nonce);
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

export default appendToHTML;
