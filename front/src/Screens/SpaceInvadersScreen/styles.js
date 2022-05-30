import styled from 'styled-components';

export const ScreenContainer = styled.div`
	${({ theme }) => theme.customStyles.screenSized}
	${({ theme }) => theme.customStyles.centerItems}
  font-size: ${({ theme }) => theme.sizes.text.L};
	background-color: ${({ theme }) => theme.colors.SpaceInvadersScreen.BG};
	color: ${({ theme }) => theme.colors.SpaceInvadersScreen.text};
`;

export const ShipContainer = styled.div`
	position: absolute;
	bottom: 3vh;
	left: ${({ position }) => position + 50 + '%'};
	transform: translateX(-50%);
	width: fit-content;
`;

export const Bullet = styled.div.attrs(props => ({
	style: {
		bottom: `calc(${props.position.y}% + 6vh)`,
		left: props.position.x + 50 + '%',
	},
}))`
	position: absolute;
	transform: translateX(-50%) translateY(100%);
`;

export const AmmoBar = styled.div.attrs(({ ammoPercent }) => ({
	style: {
		width: `${100 - ammoPercent}%`,
	},
}))`
	position: absolute;
	background-color: rgba(255, 255, 255, 0.1);
	bottom: 0;
	left: 0;
	height: 1rem;
`;

export const Alien = styled.div.attrs(({ size, pos }) => ({
	style: {
		width: `${size.x}%`,
		height: `${size.y}%`,
		fontSize: `${size.y / 1.75}vh`,

		bottom: `calc(${pos.y}% + 3vh)`,
		left: `calc(${pos.x}% + 50%)`,
	},
}))`
	position: absolute;
	transform: translateX(-50%);
`;

export const LevelNumDisplay = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	font-size: ${({ theme }) => theme.sizes.text.XL};
	color: ${({ theme }) => theme.colors.SpaceInvadersScreen.text};
	opacity: ${({ isShown }) => (isShown ? 1 : 0)};
	transition: opacity 0.5s;
`;
