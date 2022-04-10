import Lodash from 'lodash';

// gets either a string or array of strings and wraps every string in a div
// important to ensure intended line-breaks.
export const Text = ({ children }) => {
	const createRandomKey = () => Lodash.uniqueId('text-element-');

	const iterateOnCells = arr => {
		return arr.map(cell => {
			return <Text key={createRandomKey()}>{cell}</Text>;
		});
	};

	if (Array.isArray(children)) {
		return iterateOnCells(children);
	}

	if (typeof children === 'string') {
		return <div key={createRandomKey()}>{children}</div>;
	}
};
