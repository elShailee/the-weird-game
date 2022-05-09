import { animated } from 'react-spring';
import styled from 'styled-components';
import { isMobileView } from 'Utils/deviceUtils';

export const ScreenContainer = styled(animated.div)`
	${({ theme }) => theme.customStyles.screenSized}
	${({ theme }) => theme.customStyles.centerItems}
	${({ theme }) => theme.customStyles.nonSelectable}
	background-color: ${({ theme }) => theme.colors.shopScreen.BG};
	font-family: ${({ theme }) => theme.fonts.primary};
	justify-content: start;
	padding: ${({ theme }) => theme.sizes.padding.L};
`;

export const ShopContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
	margin-top: ${({ theme }) => theme.sizes.padding.XL};
`;

export const Header = styled.div`
	margin: ${({ theme }) => (isMobileView() ? `5rem` : theme.sizes.padding.L)} 0;
	font-size: ${({ theme }) => theme.sizes.text.XL};
	color: ${({ theme }) => theme.colors.shopScreen.titleText};
	text-decoration: underline;
	font-style: italic;
`;

export const Card = styled.div`
	${({ theme }) => theme.customStyles.centerItems};
	border-radius: ${({ theme }) => theme.sizes.borderRadius.XL};
	width: 40vmin;
	height: 33vmin;
	min-width: 150px;
	min-height: 200px;

	background-color: ${({ theme }) => theme.colors.shopScreen.card.BG};
	margin: ${({ theme }) => theme.sizes.padding.L};
	padding: ${({ theme }) => theme.sizes.padding.M};
	box-shadow: ${({ theme }) => theme.shadows.S}, ${({ theme }) => theme.innerGlows.S};
`;

export const GridContainer = styled.div`
	/* background-color: #559; */
	max-height: 80vh;
	overflow: auto;
	${({ theme }) => theme.customStyles.hideScrollbar}
`;

export const ItemsGrid = styled.div`
	/* background-color: #aa7; */
	/* width: 80%; */
	/* min-height: 80vh; */
	/* ${({ theme }) => theme.customStyles.centerItems}
	flex-direction:row;
	flex-wrap: wrap; */
	display: grid;
	grid-auto-rows: 4.5vmax;
	grid-template-columns: ${({ cols }) => `repeat(${cols}, 4.5vmax)`};
	/* padding: 15px; */
	border-bottom: 2px dashed rgba(200, 200, 200, 0.5);
	border-right: 2px dashed rgba(200, 200, 200, 0.5);
`;

export const EmptyGridCell = styled.div`
	/* background-color: ${({ theme }) => theme.colors.shopScreen.BG}; */
	border-top: 2px dashed rgba(200, 200, 200, 0.5);
	border-left: 2px dashed rgba(200, 200, 200, 0.5);
	box-sizing: border-box;
`;
export const ItemContainer = styled.div`
	border-top: 2px dashed rgba(200, 200, 200, 0.5);
	border-left: 2px dashed rgba(200, 200, 200, 0.5);
	box-sizing: border-box;
	grid-row: 6 / span 2;
	grid-column: 3 / span 4;
	padding: 0.5rem;
`;
export const Item = styled.div`
	width: 100%;
	height: 100%;
	background-color: #729;
	border-radius: 1rem;
`;
export const PlaceHolder = styled.div`
	background-color: #999;
	width: 40vmax;
	height: 80vh;
`;
