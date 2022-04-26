// numbering convention is single digits Brightness-Saturation-opacity, 0 is 10.

const palette = {
	transparent: `rgba(0, 0, 0, 0)`,
	gray: {
		200: `rgb(20, 20, 20)`,
		502: `rgba(128, 128, 128, 0.2)`,
		503: `rgba(128, 128, 128, 0.3)`,
		700: `rgb(153, 153, 153)`,
		900: `rgb(229, 232, 236)`,
	},
	white: {
		900: `white`,
	},
	blue: {
		200: `rgb(8, 32, 50)`,
		350: `rgb(26, 45, 63)`,
		450: `rgb(44, 57, 75)`,
		550: `rgb(51, 71, 86)`,
		620: `rgb(72,88,104)`,
		720: `rgb(85, 104, 122)`,
	},
	orange: {
		600: `rgb(230, 50, 30)`,
		900: `rgb(255, 76, 41)`,
	},
};

export default palette;
