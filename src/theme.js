import palette from 'palette';

export const theme = {
	sizes: {
		border: {},
		borderRadius: {
			Max: '50%',
		},
		padding: {
			L: '1rem',
			M: '0.5rem',
		},
		text: {
			XL: '3rem',
			L: '2rem',
			S: '1rem',
		},
		letterSpacing: {
			L: '0.07rem',
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
			welcomeScreenBG: palette.red[950],
			introScreenBG: palette.gray[200],
			introScreenText: palette.gray[700],
		},
	},
};
