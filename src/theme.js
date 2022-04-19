import palette from 'palette';

export const enlarge = (inputSize, incrementBy) => {
	const sizesArray = ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'MAX'];
	return sizesArray[sizesArray.indexOf(inputSize) + incrementBy];
};

export const theme = {
	sizes: {
		border: {},
		borderRadius: {
			M: '0.5rem',
			Max: '50%',
		},
		padding: {
			L: '1rem',
			M: '0.5rem',
		},
		text: {
			XL: '3rem',
			L: '2rem',
			M: '1.5rem',
			S: '1rem',
		},
		letterSpacing: {
			L: '0.07rem',
		},
		components: {
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
		chapter00: {
			welcomeScreenBG: palette.orange[900],
			welcomeScreenText: palette.gray[200],
			introScreenBG: palette.gray[200],
			introScreenText: palette.gray[700],
		},
		chapter01: {
			BG: palette.blue[350],
			text: {
				light: palette.white[900],
				dark: palette.orange[950],
			},
			addButton: {
				BG: palette.orange[900],
				text: palette.white[900],
			},
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
				text: 'white',
			},
		},
	},
};
