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
	bottom: 3rem;
	left: ${({ position }) => position + 50 + '%'};
	transform: translateX(-50%);
	width: fit-content;
`;

export const Bullet = styled.div.attrs(props => ({
	style: {
		bottom: `calc(${props.position.y}% + 6rem)`,
		left: props.position.x + 50 + '%',
	},
}))`
	position: absolute;
	transform: translateX(-50%) translateY(50%);
`;

export const AmmoBar = styled.div`
	position: absolute;
	background-color: rgba(255, 255, 255, 0.1);
	bottom: 0;
	left: 0;
	width: ${({ ammoPercent }) => 100 - ammoPercent}%;
	height: 2rem;
`;

export const AliensContainer = styled.div.attrs(props => ({
	style: {
		bottom: `calc(${props.top}% + 6rem)`,
		left: props.left + 50 + '%',
	},
}))`
	${({ theme }) => theme.customStyles.centerItems}
	flex-direction: column-reverse;
	position: absolute;
	transform: translateX(-50%);
`;

export const AliensRow = styled.div`
	display: flex;
	flex-direction: row;
`;

export const Alien = styled.div`
	margin: 1% 1vw;
	width: ${({ width }) => width}vw;
	height: 2rem;
`;
