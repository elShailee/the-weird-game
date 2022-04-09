export const pickRandomObjectFromArray = arr => {
	const { length } = arr;
	const randomIndex = Math.floor(Math.random() * length);
	return arr[randomIndex];
};
