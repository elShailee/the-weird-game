export const formatTextObjectToMountableJSX = textObject => {
	if (typeof textObject === 'string') {
		const randomKey = 'formattedTextObject' + Math.floor(Math.random() * 100000); //create randon key generator
		return <div key={randomKey}>{textObject}</div>;
	} else if (Array.isArray(textObject)) {
		return textObject.map(cell => formatTextObjectToMountableJSX(cell));
	} else if (textObject.constructor === Object) {
		const newObj = {};
		Object.keys(textObject).map(key => {
			newObj[key] = formatTextObjectToMountableJSX(textObject[key]);
			return key;
		});
		return newObj;
	}
};
