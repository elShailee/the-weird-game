import palette from 'palette';

export const enlarge = (inputSize, incrementBy) => {
	const sizesArray = ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'MAX'];
	return sizesArray[sizesArray.indexOf(inputSize) + incrementBy];
};

export const theme = {
	sizes: {
		border: {},
		borderRadius: {
			S: '0.25rem',
			M: '0.5rem',
			L: '0.75rem',
			Max: '50%',
		},
		padding: {
			S: '0.3rem',
			M: '0.5rem',
			L: '0.75rem',
			XL: '1rem',
			XXL: '1.5rem',
		},
		text: {
			S: '0.75rem',
			M: '1.25rem',
			L: '2rem',
			XL: '3rem',
		},
		letterSpacing: {
			L: '0.07rem',
		},
		components: {
			Button: {
				S: '1.5rem',
				M: '2.5rem',
				L: '4rem',
			},
			FAB: {
				S: '2.5rem',
				M: '3.5rem',
				L: '4.5rem',
			},
		},
	},
	filters: {
		darken: {
			S: 'brightness(85%) saturate(85%)',
			L: 'brightness(65%) saturate(65%)',
		},
		lighten: {
			S: 'brightness(123%) saturate(85%)',
			L: 'brightness(185%) saturate(65%)',
		},
	},
	shadows: {
		Min: 'box-shodow: 0;',
		S: 'box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.25), 0px 6px 10px 0px rgba(0, 0, 0, 0.2), 0px 1px 18px 0px rgba(0, 0, 0, 0.16);',
		L: 'box-shadow: 0px 7px 8px -4px rgb(0, 0, 0, 0.25), 0px 12px 17px 2px rgb(0, 0, 0, 0.2),	0px 5px 22px 4px rgb(0, 0, 0, 0.16);',
	},
	fonts: {
		primary: "'Noto Serif', serif",
	},
	customStyles: {
		centerItems: `	
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			text-align: center;
			box-sizing: border-box;
		`,
		nonSelectable: `
			user-select: none;
			-webkit-user-drag: none;
			-webkit-tap-highlight-color: transparent;
		`,
		clickable: `
			cursor: pointer;
		`,
		screenSized: `
			position: absolute;
			left: 0;
			top: 0;
			width: 100vw;
			height: 100vh;
			box-sizing: border-box;
		`,
	},
	colors: {
		introScreen: {
			welcomeScreenBG: palette.orange[600],
			welcomeScreenText: palette.gray[200],
			dialogScreenBG: palette.gray[200],
			dialogScreenText: palette.gray[700],
		},
		moneyScreen: {
			BG: palette.blue[350],
			focusBG: palette.orange[600],
			text: {
				light: palette.white[900],
				faded: palette.blue[620],
			},
			addButton: {
				BG: palette.orange[900],
				text: palette.white[900],
			},
		},
		navbar: {
			BG: palette.gray[502],
			buttonsBG: palette.gray[503],
			openButtonBG: palette.gray[503],
		},
		inputs: {
			disabled: {
				text: palette.gray[900],
				BG: palette.blue[720],
			},
			dark: {
				text: 'black',
			},
			light: {
				text: palette.white[900],
			},
		},
		defaults: {
			text: palette.white[900],
		},
	},
};
