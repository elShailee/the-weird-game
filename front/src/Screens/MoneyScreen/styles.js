import { animated } from 'react-spring';
import styled from 'styled-components';

export const ScreenContainer = styled(animated.div)`
	${({ theme }) => theme.customStyles.screenSized}
	${({ theme }) => theme.customStyles.nonSelectable}
  ${({ theme }) => theme.customStyles.centerItems}
  font-size:${({ theme }) => theme.sizes.text.M};
	font-family: ${({ theme }) => theme.fonts.primary};
	background-color: ${({ theme }) => theme.colors.moneyScreen.BG};
	color: ${({ theme }) => theme.colors.moneyScreen.text.light};
`;

export const BalanceContainer = styled.div`
	position: absolute;
	top: ${({ shouldShow }) => (shouldShow ? '20vh' : '40vh')};
	height: ${({ shouldShow }) => (shouldShow ? '5rem' : '0')};
	font-size: ${({ theme }) => theme.sizes.text.XL};
	overflow: hidden;
	transition: height 0.5s ease-in-out, top 1s ease-in-out;

	&::after {
		content: '$';
		color: green;
		margin-left: ${({ theme }) => theme.sizes.padding.S};
	}
`;

export const DialogContainer = styled.div`
	position: absolute;
	padding: ${({ theme }) => theme.sizes.padding.M} ${({ theme }) => theme.sizes.padding.XL};
	border-radius: ${({ theme }) => theme.sizes.borderRadius.M};
	top: 2rem;
	font-size: ${({ theme }) => theme.sizes.text.M};
`;

export const Credits = styled.div`
	color: ${({ theme }) => theme.colors.moneyScreen.text.faded};
	position: absolute;
	right: ${({ theme }) => theme.sizes.padding.XXL};
	bottom: ${({ theme }) => theme.sizes.padding.XXL};
	font-size: ${({ theme }) => theme.sizes.text.S};
`;
