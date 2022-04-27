import { animated } from 'react-spring';
import styled from 'styled-components';
import { isMobileView } from 'Utils/deviceUtils';

export const ShopScreenContainer = styled(animated.div)`
	${({ theme }) => theme.customStyles.screenSized}
	${({ theme }) => theme.customStyles.centerItems}
	${({ theme }) => theme.customStyles.nonSelectable}
	background-color: ${({ theme }) => theme.colors.shopScreen.BG};
	font-family: ${({ theme }) => theme.fonts.primary};
	justify-content: start;
	padding: ${({ theme }) => theme.sizes.padding.L};
`;

export const Header = styled.div`
	margin-top: ${({ theme }) => (isMobileView() ? `5rem` : theme.sizes.padding.L)};
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

export const CardsContainer = styled.div`
	${({ theme }) => theme.customStyles.centerItems}
	flex-direction:row;
	flex-wrap: wrap;
	margin-top: ${({ theme }) => theme.sizes.padding.XL};
`;
