function stringify(object) {
	let stringified = '';
	if (object && (typeof object === 'string' || typeof object === 'number')) {
		return String(object);
	}

	if (object && typeof object === 'object') {
		try {
			stringified = JSON.stringify(object);
		} catch (err) {
			console.error('stringify', err);
		}
	}

	return stringified;
}

export {
	stringify
};
